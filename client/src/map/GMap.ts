import { Constants } from '../util/Constants';
import { convertCoordinateToLatLng } from '../util/coordinateUtils';
import { CreateStatement } from '../CreateStatement';
import CoordMapType from './CoordMapType';
import { Canvas } from './Canvas';

export default class GMap {
  static initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: Constants.DEFAULT_ZOOM,
      center: convertCoordinateToLatLng({ x: 20, y: 20 }),
      streetViewControl: false,
      mapTypeId: 'tiled',
      mapTypeControlOptions: {
        mapTypeIds: ['tiled', 'untiled'],
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      restriction: {
        latLngBounds: {
          east: Constants.MAX_SCREEN_LONGTITUDE,
          west: -Constants.MAX_SCREEN_LONGTITUDE,
          north: Constants.MAX_SCREEN_LATITUDE,
          south: -Constants.MAX_SCREEN_LATITUDE
        },
        strictBounds: true
      }
    });

    const listOfCreateStatements = GMap.getMapCreateStatements();

    // The tiled and untiled variants of our coordinate map - the roads/markers remain in place when switching variants
    map.mapTypes.set('tiled', new CoordMapType(new google.maps.Size(256, 256), true));
    map.mapTypes.set('untiled', new CoordMapType(new google.maps.Size(256, 256), false));

    // Create a canvas with the map and list of CreateStatements
    const canvas = new Canvas(map);
    canvas.render(listOfCreateStatements);
  }

  private static getMapCreateStatements(): CreateStatement[] {
    const xhr = new XMLHttpRequest();
    const url = '/map';
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(null);
    if (xhr.status === 200) {
      return JSON.parse(xhr.response).result;
    } else {
      console.error('request failed', xhr.response.error);
      return xhr.response;
    }
  }
}
