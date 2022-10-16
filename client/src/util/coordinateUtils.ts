// Convert from our coordinate system to Google Maps LatLng system
import { CreatePosition } from '../CreateStatement';

// Utility class for all things coordinate related (including some constants)

/* 4 units indicating a location exist:
 * - latitude, longtitude: degree
 * - x, y: coord
 * - pixel
 * - tile
 * 1 tile is always PIXELS_PER_TILE pixel, regardless of zoom level
 * 1 degree is always 2^maxZoom * PIXELS_PER_TILE / PIXELS_PER_TILE / 360 coords, regardless of zoom level
 * with a specific zoom level, 1 pixel is 2^(maxZoom-zoom) / PIXELS_PER_COORD_MAX_ZOOM coords. When maxZoom=zoom, it would be 4 pixels = 1 coord
 * therefore, we have a way to translate between any unit
 */
export class CoordinateUtils {
  // zoom level
  static minZoom = 10;
  static maxZoom = 19;
  static defaultZoom = 10;

  // canvas dimension (in different units)
  static canvasWidthInDegrees = 360;
  static canvasHeightInDegrees = 360;
  static canvasWidthInCoords = 0;
  static canvasHeightInCoords = 0;
  static canvasWidthInMaxZoomTiles = 0;
  static canvasHeightInMaxZoomTiles = 0;
  
  // number of tiles that fits properly on a 1920 x 1080 screen
  static readonly TILES_X_PER_SCREEN = 6;
  static readonly TILES_Y_PER_SCREEN = 4;

  // some conversion ratio information for convenience (explained on line 7)
  static readonly PIXELS_PER_TILE = 256;
  static readonly PIXELS_PER_COORD_MAX_ZOOM = 2;
  static readonly COORDS_PER_DEGREE = Math.pow(2, this.maxZoom) * this.PIXELS_PER_TILE / this.PIXELS_PER_COORD_MAX_ZOOM / 360;

  // default canvas size
  static readonly DEFAULT_CANVAS_WIDTH = 8192;
  static readonly DEFAULT_CANVAS_HEIGHT = 4096;

  // how much zoom out from the max zoom should (1) markers be visible (2) the default zoom level be
  static MARKER_VISIBLE_ZOOM_LEVEL_OFFSET = -3;
  static DEFAULT_ZOOM_LEVEL_OFFSET = -3;

  // compute all necessary information based on provided canvas dimension
  static configure(canvasWidth: number, canvasHeight: number) {
    // calculate the number of tiles horizontally/vertically in maximum zoom
    // in maximum zoom, each coordinate corresponds to PIXELS_PER_COORD_MAX_ZOOM pixels
    let maxZoomXTiles = Math.ceil(canvasWidth / this.PIXELS_PER_TILE * this.PIXELS_PER_COORD_MAX_ZOOM);
    let maxZoomYTiles = Math.ceil(canvasHeight / this.PIXELS_PER_TILE * this.PIXELS_PER_COORD_MAX_ZOOM);
    
    // based on these tile numbers, determine a proper min zoom level
    const zoomDiff = Math.ceil(Math.log2(Math.max(
      maxZoomXTiles / this.TILES_X_PER_SCREEN,
      maxZoomYTiles / this.TILES_Y_PER_SCREEN
      )));
    this.minZoom = this.maxZoom - zoomDiff;
    this.defaultZoom = Math.max(this.maxZoom + this.DEFAULT_ZOOM_LEVEL_OFFSET, this.minZoom);

    // adjust the canvas so that it fits in even number of whole tiles in min zoom
    // the degree range is intentionally larger than fit to show a bit of outside tiles
    maxZoomXTiles = Math.ceil(maxZoomXTiles / Math.pow(2, zoomDiff));
    if (maxZoomXTiles % 2 != 0) {
      maxZoomXTiles += 1;
    }
    maxZoomXTiles *= Math.pow(2, zoomDiff);

    maxZoomYTiles = Math.ceil(maxZoomYTiles / Math.pow(2, zoomDiff));
    if (maxZoomYTiles % 2 != 0) {
      maxZoomYTiles += 1;
    }
    maxZoomYTiles *= Math.pow(2, zoomDiff);

    // record down different units of the canvas dimension for convenience
    // the degree range used during map construction has one more out-of-bound tile horizontally and vertically to wrap around the border of the map
    this.canvasWidthInDegrees = 360 / Math.pow(2, this.maxZoom) * (maxZoomXTiles + 1);
    this.canvasHeightInDegrees = 360 / Math.pow(2, this.maxZoom) * (maxZoomYTiles + 1);

    this.canvasWidthInCoords = maxZoomXTiles * this.PIXELS_PER_TILE / this.PIXELS_PER_COORD_MAX_ZOOM;
    this.canvasHeightInCoords = maxZoomYTiles * this.PIXELS_PER_TILE / this.PIXELS_PER_COORD_MAX_ZOOM;

    this.canvasWidthInMaxZoomTiles = maxZoomXTiles;
    this.canvasHeightInMaxZoomTiles = maxZoomYTiles;
  }

  // Convert from (x, y) to lat lng
  static convertCoordinateToLatLng(position: CreatePosition): google.maps.LatLngLiteral {
    // we rely on the fact that the middle of canvas (canvasWidthInCoords / 2, canvasWidthInCoords / 2) has lat and lng as 0
    const lat = (position.y - this.canvasHeightInCoords / 2) / this.COORDS_PER_DEGREE;
    const lng = (position.x - this.canvasWidthInCoords / 2) / this.COORDS_PER_DEGREE;
    return { lat, lng };
  }

  // Convert from tile coordinate + zoom to our coordinate system
  static convertTileToCoordinate(tileCoordinate: google.maps.Point, zoom: number): CreatePosition {
    // zoom scale relative to the base line maxZoom
    const relativeZoomScale = Math.pow(2, this.maxZoom - zoom);

    // ratio from tile to coordinate
    const coordinatesPerTile = this.PIXELS_PER_TILE / this.PIXELS_PER_COORD_MAX_ZOOM * relativeZoomScale;

    // canvas middle tile (same value horizontally and vertically)
    const middleTile = Math.pow(2, zoom - 1);

    // canvas bottom left tile
    const bottomLeftTileX = middleTile - (this.canvasWidthInMaxZoomTiles / relativeZoomScale) / 2;
    const bottomLeftTileY = middleTile + (this.canvasHeightInMaxZoomTiles / relativeZoomScale) / 2;

    // bottom left tile should have (0, 0), so any other tile could get the coordinates (in our system) using that as a reference
    // note that y has negation so that user can use coordinate system as a natural Quadrant 1 (y increases as the position goes up)
    return { x: (tileCoordinate.x - bottomLeftTileX) * coordinatesPerTile, y: (bottomLeftTileY - tileCoordinate.y) * coordinatesPerTile };
  }

  // Check if the whole tile is in canvas based on its top-left corner coordinate
  static isTileInCanvas(coord: CreatePosition): boolean {
    return coord.x >= 0 && coord.x < this.canvasWidthInCoords && coord.y > 0 && coord.y <= this.canvasHeightInCoords;
  }

  // Check if a particular coordinate is canvas
  static isCoordinateInCanvas(coord: CreatePosition): boolean {
    return coord.x >= 0 && coord.x <= this.canvasWidthInCoords && coord.y >= 0 && coord.y <= this.canvasHeightInCoords;
  }

  // Check if a zoom level should display markers
  static shouldMarkersBeVisible(zoom: number): boolean {
    return zoom >= (this.MARKER_VISIBLE_ZOOM_LEVEL_OFFSET + this.maxZoom) && zoom <= this.maxZoom;
  }
}
