import { CreateStatement } from './CreateStatement';

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
  name = 'Tile #s';
  alt = 'Tile Coordinate Map Type';

  constructor(tileSize: google.maps.Size) {
    this.tileSize = tileSize;
  }

  getTile(coord: google.maps.Point, zoom: number, ownerDocument: Document): HTMLElement {
    const div = ownerDocument.createElement('div');

    div.innerHTML = String(coord);
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
    zoom: 10,
    center: { lat: 0, lng: 0 },
    streetViewControl: false,
    mapTypeId: 'coordinate',
    mapTypeControlOptions: {
      mapTypeIds: ['coordinate', 'roadmap'],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });

  map.addListener('maptypeid_changed', () => {
    const showStreetViewControl = (map.getMapTypeId() as string) !== 'coordinate';

    map.setOptions({
      streetViewControl: showStreetViewControl
    });
  });

  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  const listOfCreateStatements = getMapCreateStatements();
  console.log(listOfCreateStatements);
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS
  // THIS IS WHERE YOU CAN ACCESS THE CREATE STATEMENTS

  // Now attach the coordinate map type to the map's registry.
  map.mapTypes.set('coordinate', new CoordMapType(new google.maps.Size(256, 256)));
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;
export {};
