import { CreateStatement } from './CreateStatement';
import { Constants } from './constants';

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
/*
 * This demo demonstrates how to replace default map tiles with custom imagery.
 * In this case, the CoordMapType displays gray tiles annotated with the tile
 * coordinates.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */

class CoordMapType {
  tileSize: google.maps.Size;
  maxZoom = 19;
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

  getTile(coord: google.maps.Point, zoom: number, ownerDocument: Document): HTMLElement {
    const div = ownerDocument.createElement('div');
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
    zoom: 10,
    center: { lat: 0, lng: 0 },
    streetViewControl: false,
    mapTypeId: 'tiled',
    mapTypeControlOptions: {
      mapTypeIds: ['tiled', 'untiled'],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });

  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  const listOfCreateStatements = getMapCreateStatements();
  console.log(listOfCreateStatements);
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS

  // The tiled and untiled variants of our coordinate map - the roads/markers remain in place when switching variants
  map.mapTypes.set('tiled', new CoordMapType(new google.maps.Size(256, 256), true));
  map.mapTypes.set('untiled', new CoordMapType(new google.maps.Size(256, 256), false));
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;
export {};
