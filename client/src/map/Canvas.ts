import {
  CreateStatement,
  isMarkerCreateStatement,
  isPolylineCreateStatement,
  MarkerCreateStatement,
  PolylineCreateStatement
} from '../CreateStatement';
import { convertCoordinateToLatLng } from '../util/coordinateUtils';
import { Constants } from '../util/Constants';

export class Canvas {
  map: google.maps.Map;
  polylines: google.maps.Polyline[];
  markers: google.maps.Marker[];

  constructor(map: google.maps.Map) {
    this.map = map;
    this.polylines = [];
    this.markers = [];
  }

  render(statements: CreateStatement[]) {
    let polylines: google.maps.Polyline[] = [];
    const markers: google.maps.Marker[] = [];

    if (statements) {
      // collections of various types of polyline and marker create statements based on layers
      const streetOutputs: PolylineCreateStatement[] = [];
      const bridgeOutputs: PolylineCreateStatement[] = [];
      const highwayOutputs: PolylineCreateStatement[] = [];
      const markerOutputs: MarkerCreateStatement[] = [];

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
        } else {
          console.log('Invalid create statement');
        }
      }

      // then create layers (bottom to top: streets (2 layers), highways (2 layers), bridges (2 layers), markers)
      polylines = polylines.concat(
        this.createPolylines(streetOutputs, Constants.TILE_BORDER_COLOR, Constants.BRIDGE_STREET_BACK_WEIGHT),
        this.createPolylines(streetOutputs, Constants.STREET_COLOR, Constants.STREET_WEIGHT),
        this.createPolylines(highwayOutputs, Constants.HIGHWAY_BACK_COLOR, Constants.HIGHWAY_BACK_WEIGHT),
        this.createPolylines(highwayOutputs, Constants.HIGHWAY_FRONT_COLOR, Constants.HIGHWAY_FRONT_WEIGHT),
        this.createPolylines(bridgeOutputs, Constants.BRIDGE_BACK_COLOR, Constants.BRIDGE_STREET_BACK_WEIGHT),
        this.createPolylines(bridgeOutputs, Constants.STREET_COLOR, Constants.STREET_WEIGHT)
      );

      for (let i = 0; i < markerOutputs.length; i++) {
        markers.push(this.createMarker(markerOutputs[i]));
      }
    }
    this.polylines = polylines;
    this.markers = markers;
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

  private createPolylines(
    streetOutputs: PolylineCreateStatement[],
    strokeColor: string,
    strokeWeight: number
  ): google.maps.Polyline[] {
    const commonConfiguration = {
      strokeOpacity: 1,
      map: this.map,
      strokeColor,
      strokeWeight
    };

    return streetOutputs.map((streetOutput: PolylineCreateStatement) => {
      return new google.maps.Polyline({
        path: [convertCoordinateToLatLng(streetOutput.startPosition), convertCoordinateToLatLng(streetOutput.endPosition)],
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
      position: convertCoordinateToLatLng(markerOutput.position),
      icon: {
        url,
        scaledSize: new google.maps.Size(Constants.MARKER_SCALE, Constants.MARKER_SCALE)
      },
      map: this.map
    });
  }
}
