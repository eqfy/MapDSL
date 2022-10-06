import { Canvas } from './canvas';
import { CreateStatement } from './CreateStatement';
import { Constants } from './constants';
import { CoordinateConverter } from './coordinateConverter';

// THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
// THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
function getMapCreateStatements(): CreateStatement[] {
  const xhr = new XMLHttpRequest();
  const url = '/map';
  xhr.open('GET', url, false);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(null);
  if (xhr.status === 200) {
    return xhr.response;
  } else {
    console.error('request failed', xhr.response.error);
    return [];
  }
}

// The coordinate map type configuration for the canvas
class CoordMapType {
  tileSize = new google.maps.Size(Constants.TILE_SIDE_LENGTH, Constants.TILE_SIDE_LENGTH);
  maxZoom = Constants.MAX_ZOOM;
  minZoom = Constants.MIN_ZOOM;
  name = 'Tile #s';
  alt = 'Tile Coordinate Map Type';

  // The render function for a tile
  getTile(coord: google.maps.Point, zoom: number, ownerDocument: Document): HTMLElement {
    const div = ownerDocument.createElement('div');

    // render in terms of our coordinate system instead of the tiling one
    const convertedCoord = CoordinateConverter.convertTileToCoordinate(coord, zoom);
    div.innerHTML = `(${convertedCoord.x}, ${convertedCoord.y})`;

    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#AAAAAA';
    div.style.backgroundColor = '#E5E3DF';
    return div;
  }

  releaseTile(tile: HTMLElement): void {}
}

function initMap(): void {
  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: Constants.DEFAULT_ZOOM,
    center: { lat: 0, lng: 0 },
    streetViewControl: false,
    mapTypeId: 'coordinate',
    mapTypeControlOptions: {
      mapTypeIds: ['coordinate', 'roadmap'],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    restriction: {
      // a symmetric boundary on latitude and longtitude, to stop map repetition as well as providing convenience to calculation
      latLngBounds: {
        east: Constants.MAX_SCREEN_LONGTITUDE,
        west: -Constants.MAX_SCREEN_LONGTITUDE,
        north: Constants.MAX_SCREEN_LATITUDE,
        south: -Constants.MAX_SCREEN_LATITUDE
      },
      strictBounds: true
    }
  });

  map.addListener('maptypeid_changed', () => {
    const showStreetViewControl = (map.getMapTypeId() as string) !== 'coordinate';

    map.setOptions({
      streetViewControl: showStreetViewControl
    });
  });

  // Now attach the coordinate map type to the map's registry.
  map.mapTypes.set('coordinate', new CoordMapType(new google.maps.Size(256, 256)));

  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  const listOfCreateStatements = getMapCreateStatements();
  console.log(listOfCreateStatements);

  // Create a canvas with the map and list of CreateStatements
  const canvas = new Canvas(map, listOfCreateStatements);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;
export {};
