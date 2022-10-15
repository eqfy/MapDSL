import { Constants } from '../util/Constants';
import { CoordinateUtils } from '../util/coordinateUtils';

export default class CoordMapType {
  tileSize = new google.maps.Size(CoordinateUtils.PIXELS_PER_TILE, CoordinateUtils.PIXELS_PER_TILE);
  maxZoom = CoordinateUtils.maxZoom;
  minZoom = CoordinateUtils.minZoom;
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

  // The render function for a tile
  getTile(coord: google.maps.Point, zoom: number, ownerDocument: Document): HTMLElement {
    const div = ownerDocument.createElement('div');

    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';

    // convert into our coordinate system for computation and rendering
    const convertedCoord = CoordinateUtils.convertTileToCoordinate(coord, zoom);

    const tileInCanvas = CoordinateUtils.isTileInCanvas(convertedCoord);

    if (this.tiled) {
      // if the tile coordinate is in-bound, the coordinate should be rendered
      if (CoordinateUtils.isCoordinateInCanvas(convertedCoord)) {
        div.innerHTML = `(${convertedCoord.x}, ${convertedCoord.y})`;
      }

      // render the border of in-bound tiles if configuration is tiled
      if (tileInCanvas) {
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = Constants.TILE_BORDER_COLOR;
      }
    }

    // tile colors are decided by whether it is in bound or not, regardless of whether configuration is tiled
    div.style.backgroundColor = tileInCanvas ? Constants.CANVAS_BACKGROUND_COLOR : Constants.TILE_BORDER_COLOR;
    return div;
  }

  releaseTile(tile: HTMLElement): void {}
}
