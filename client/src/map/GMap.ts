import { CoordinateUtils } from '../util/coordinateUtils';
import { CreateStatement } from '../CreateStatement';
import CoordMapType from './CoordMapType';
import { Canvas } from './Canvas';

export default class GMap {
  static initMap(): void {
    const {
      canvas: { width, height },
      result: listOfCreateStatements
    } = GMap.getMapCreateStatements();

    // set up the coordinate system based on canvas size
    CoordinateUtils.configure(width, height);

    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: CoordinateUtils.defaultZoom,
      center: CoordinateUtils.convertCoordinateToLatLng({ x: 0, y: 0 }),
      streetViewControl: false,
      mapTypeId: 'tiled',
      mapTypeControlOptions: {
        mapTypeIds: ['tiled', 'untiled'],
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      restriction: {
        latLngBounds: {
          east: CoordinateUtils.canvasWidthInDegrees / 2,
          west: -CoordinateUtils.canvasWidthInDegrees / 2,
          north: CoordinateUtils.canvasHeightInDegrees / 2,
          south: -CoordinateUtils.canvasHeightInDegrees / 2
        }
      }
    });

    // The tiled and untiled variants of our coordinate map - the roads/markers remain in place when switching variants
    map.mapTypes.set('tiled', new CoordMapType(new google.maps.Size(256, 256), true));
    map.mapTypes.set('untiled', new CoordMapType(new google.maps.Size(256, 256), false));

    // Create a canvas with the map and list of CreateStatements
    const canvas = new Canvas(map);
    canvas.render(listOfCreateStatements);

    // Attach a legend
    const legend = document.getElementById('legend');
    if (legend) {
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      canvas.createLegend(legend);
    }

    // Attach a listener for zoom level (so that markers can be hidden on small zoom level)
    map.addListener('zoom_changed', () => {
      canvas.updateMarkerVisibility(map.getZoom());
    });
  }

  private static getMapCreateStatements(): { canvas: { width: number; height: number }; result: CreateStatement[] } {
    const xhr = new XMLHttpRequest();
    const url = '/map';
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(null);
    if (xhr.status === 200) {
      return JSON.parse(xhr.response);
    } else {
      console.error('request failed', xhr.response.error);
      return {
        canvas: { width: CoordinateUtils.DEFAULT_CANVAS_WIDTH, height: CoordinateUtils.DEFAULT_CANVAS_HEIGHT },
        result: []
      };
    }
  }
}
