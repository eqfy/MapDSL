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
  name = 'Tiled';
  alt = 'Tiled Coordinate Map Type';
  tiled = true;

  // The coordinate map type configuration for the canvas
  // Supports tiled (show grid + coordinates) and untiled. Green background is added regardless of variants
  constructor(tileSize: google.maps.Size, tiled: boolean) {
    this.tileSize = tileSize;
    this.tiled = tiled;
    if (!tiled) {
      this.name = 'Untiled';
      this.alt = 'Untiled Coordinate Map Type';
    }
  }

  constructor(tileSize: google.maps.Size) {
    this.tileSize = tileSize;
  }

  // The render function for a tile
  getTile(coord: google.maps.Point, zoom: number, ownerDocument: Document): HTMLElement {
    const div = ownerDocument.createElement('div');

    // render in terms of our coordinate system instead of the tiling one
    const convertedCoord = CoordinateConverter.convertTileToCoordinate(coord, zoom);
    div.innerHTML = `(${convertedCoord.x}, ${convertedCoord.y})`;

    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    
    if (this.tiled) {
      div.innerHTML = String(coord);
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '1px';
      div.style.borderColor = Constants.TILE_BORDER_COLOR;
    }

    div.style.backgroundColor = Constants.BACKGROUND_COLOR;
    return div;
  }

  releaseTile(tile: HTMLElement): void {}
}

function initMap(): void {
  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: Constants.DEFAULT_ZOOM,
    center: { lat: 0, lng: 0 },
    streetViewControl: false,
    mapTypeId: 'tiled',
    mapTypeControlOptions: {
      mapTypeIds: ['tiled', 'untiled'],
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

  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  const listOfCreateStatements = getMapCreateStatements();
  console.log(listOfCreateStatements);

  // The tiled and untiled variants of our coordinate map - the roads/markers remain in place when switching variants
  map.mapTypes.set('tiled', new CoordMapType(new google.maps.Size(256, 256), true));
  map.mapTypes.set('untiled', new CoordMapType(new google.maps.Size(256, 256), false));

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
