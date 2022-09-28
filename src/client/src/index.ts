import { CreateStatement } from './CreateStatement';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

function getMapCreateStatements(): CreatStatement[] {
  console.debug('test');
  const xhr = new XMLHttpRequest();
  const url = '/map';
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      return JSON.parse(xhr.response).result;
    } else {
      return JSON.parse(xhr.response).error;
    }
  };
}

function renderMap(outputStatements: CreateStatement[]) {
  for (const statement of outputStatements) {
    const para = document.createElement('p');
    const node = document.createTextNode(JSON.stringify(statement));
    para.appendChild(node);
    document.getElementById('createStatements')?.appendChild(para);
    console.log(JSON.stringify(statement));
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
  const listOfOutputStatements = getMapCreateStatements();
  console.log(listOfOutputStatements);

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
