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
    console.log(statements);
    const polylines: google.maps.Polyline[] = [];
    const markers: google.maps.Marker[] = [];

    if (statements) {
      const streetOutputs: PolylineCreateStatement[] = [];
      const markerOutputs: MarkerCreateStatement[] = [];

      for (const statement of statements) {
        if (isPolylineCreateStatement(statement)) {
          streetOutputs.push(statement);
        } else if (isMarkerCreateStatement(statement)) {
          markerOutputs.push(statement);
        } else {
          console.log('Invalid create statement');
        }
      }

      // then create layers (bottom to top: polylines, markers)
      for (let i = 0; i < streetOutputs.length; i++) {
        polylines.push(this.createPolyline(streetOutputs[i]));
      }

      for (let i = 0; i < markerOutputs.length; i++) {
        markers.push(this.createMarker(markerOutputs[i]));
      }
    }
    this.polylines = polylines;
    this.markers = markers;
  }

  private createPolyline(streetOutput: PolylineCreateStatement): google.maps.Polyline {
    console.log(`Created a polyline for streetOutput: ${JSON.stringify(streetOutput)}`);

    let strokeColor;
    switch (streetOutput.type) {
      case 'bridge':
        strokeColor = Constants.BRIDGE_COLOR;
        break;
      case 'highway':
        strokeColor = Constants.HIGHWAY_COLOR;
        break;
      case 'street':
        strokeColor = Constants.STREET_COLOR;
        break;
      default:
        throw new Error('Invalid street output type');
    }

    return new google.maps.Polyline({
      path: [convertCoordinateToLatLng(streetOutput.startPosition), convertCoordinateToLatLng(streetOutput.endPosition)],
      strokeColor,
      strokeOpacity: 1,
      strokeWeight: 5,
      map: this.map
    });
  }

  private createMarker(markerOutput: MarkerCreateStatement): google.maps.Marker {
    console.log(`Created a marker for streetOutput: ${JSON.stringify(markerOutput)}`);

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
