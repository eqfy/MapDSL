import {
  CreatePosition,
  CreateStatement,
  isMarkerCreateStatement,
  isPolygonCreateStatement,
  isPolylineCreateStatement,
  MarkerCreateStatement,
  PolygonCreateStatement,
  PolylineCreateStatement
} from '../CreateStatement';
import { CoordinateUtils } from '../util/coordinateUtils';
import { Constants } from '../util/Constants';

export class Canvas {
  map: google.maps.Map;
  polylines: google.maps.Polyline[];
  markers: google.maps.Marker[];
  polygons: google.maps.Polygon[];
  markerVisibility = true;

  constructor(map: google.maps.Map) {
    this.map = map;
    this.polylines = [];
    this.markers = [];
    this.polygons = [];
  }

  render(statements: CreateStatement[]) {
    let polylines: google.maps.Polyline[] = [];
    const markers: google.maps.Marker[] = [];
    let polygons: google.maps.Polygon[] = [];

    if (statements) {
      // collections of various types of polyline and marker create statements based on layers
      const streetOutputs: PolylineCreateStatement[] = [];
      const bridgeOutputs: PolylineCreateStatement[] = [];
      const highwayOutputs: PolylineCreateStatement[] = [];
      const markerOutputs: MarkerCreateStatement[] = [];
      const waterOutputs: PolygonCreateStatement[] = [];
      const buildingOutputs: PolygonCreateStatement[] = [];

      for (const statement of statements) {
        if (isPolylineCreateStatement(statement)) {
          switch (statement.type) {
            case 'street':
              streetOutputs.push(statement);
              break;
            case 'bridge':
              bridgeOutputs.push(statement);
              break;
            case 'highway':
              highwayOutputs.push(statement);
              break;
            default:
              throw new Error('Invalid street output type');
          }
        } else if (isMarkerCreateStatement(statement)) {
          markerOutputs.push(statement);
        } else if (isPolygonCreateStatement(statement)) {
          switch (statement.type) {
            case 'water':
              waterOutputs.push(statement);
              break;
            case 'building':
              buildingOutputs.push(statement);
              break;
              default:
                throw new Error('Invalid polygon output type');
          }
        } else {
          console.log('Invalid create statement');
        }
      }

      // then create layers (bottom to top: water, streets (2 layers), highways (2 layers), bridges (2 layers), building, markers)

      polygons = polygons.concat(this.createPolygons(waterOutputs, Constants.WATER_COLOR));

      polylines = polylines.concat(
        this.createPolylines(streetOutputs, Constants.TILE_BORDER_COLOR, Constants.BRIDGE_STREET_BACK_WEIGHT),
        this.createPolylines(streetOutputs, Constants.STREET_COLOR, Constants.STREET_WEIGHT),
        this.createPolylines(highwayOutputs, Constants.HIGHWAY_BACK_COLOR, Constants.HIGHWAY_BACK_WEIGHT),
        this.createPolylines(highwayOutputs, Constants.HIGHWAY_FRONT_COLOR, Constants.HIGHWAY_FRONT_WEIGHT),
        this.createPolylines(bridgeOutputs, Constants.BRIDGE_BACK_COLOR, Constants.BRIDGE_STREET_BACK_WEIGHT),
        this.createPolylines(bridgeOutputs, Constants.STREET_COLOR, Constants.STREET_WEIGHT),
        );
      
      polygons = polygons.concat(this.createPolygons(buildingOutputs, Constants.BUILDING_COLOR, Constants.BUILDING_BORDER_COLOR));

      for (let i = 0; i < markerOutputs.length; i++) {
        markers.push(this.createMarker(markerOutputs[i]));
      }
    }
    this.polylines = polylines;
    this.markers = markers;
    this.polygons = polygons;
  }

  public createLegend(legend: HTMLElement) {
    const markerMap = {
      street: Constants.STREET_LEGEND,
      bridge: Constants.BRIDGE_LEGEND,
      highway: Constants.HIGHWAY_LEGEND,
      'stop sign': Constants.STOP_SIGN_PATH,
      'traffic light': Constants.TRAFFICE_LIGHT_PATH,
      'bus stop': Constants.BUS_STOP_PATH,
      'train stop': Constants.TRAIN_STOP_PATH
    };

    let div: HTMLElement;

    for (const description in markerMap) {
      div = document.createElement('div');
      div.innerHTML = `<img src="${markerMap[description]}" width=${Constants.LEGEND_SCALE}> ${description}`;
      legend.appendChild(div);
    }
  }

  public updateMarkerVisibility(zoom: number | undefined) {
    if (!zoom) {
      return;
    }
    const newVisibility = CoordinateUtils.shouldMarkersBeVisible(zoom);
    if (newVisibility === this.markerVisibility) {
      return;
    }
    this.markerVisibility = newVisibility;
    this.markers.forEach((marker: google.maps.Marker) => {
      marker.setVisible(newVisibility);
    })
  }

  private createPolylines(streetOutputs: PolylineCreateStatement[], strokeColor: string, strokeWeight: number): google.maps.Polyline[] {
    const commonConfiguration = {
      strokeOpacity: 1,
      map: this.map,
      strokeColor,
      strokeWeight
    };

    return streetOutputs.map((streetOutput: PolylineCreateStatement) => {
      return new google.maps.Polyline({
        path: [CoordinateUtils.convertCoordinateToLatLng(streetOutput.startPosition), CoordinateUtils.convertCoordinateToLatLng(streetOutput.endPosition)],
        ...commonConfiguration
      });
    });
  }

  private createMarker(markerOutput: MarkerCreateStatement): google.maps.Marker {
    let url;
    switch (markerOutput.type) {
      case 'stop sign':
        url = Constants.STOP_SIGN_PATH;
        break;
      case 'traffic light':
        url = Constants.TRAFFICE_LIGHT_PATH;
        break;
      case 'train stop':
        url = Constants.TRAIN_STOP_PATH;
        break;
      case 'bus stop':
        url = Constants.BUS_STOP_PATH;
        break;
      default:
        throw new Error('Invalid market output type');
    }

    return new google.maps.Marker({
      position: CoordinateUtils.convertCoordinateToLatLng(markerOutput.position),
      icon: {
        url,
        scaledSize: new google.maps.Size(Constants.MARKER_SCALE, Constants.MARKER_SCALE)
      },
      map: this.map
    });
  }

  private createPolygons(polygonOutputs: PolygonCreateStatement[], fillColor: string, strokeColor?: string): google.maps.Polygon[] {
    const commonConfiguration = {
      map: this.map,
      fillOpacity: 1.0,
      strokeColor,
      fillColor,
      strokeWeight: strokeColor ? Constants.POLYGON_STROKE_WEIGHT : 0
    };

    return polygonOutputs.map((polygonOutput: PolygonCreateStatement) => {
      console.log(`Created a polygon for polygonOutput: ${JSON.stringify(polygonOutput)}`);
      return new google.maps.Polygon({
        paths: [polygonOutput.positions.map((pos: CreatePosition) => CoordinateUtils.convertCoordinateToLatLng(pos))],
        ...commonConfiguration
      })
    });
  }
}
