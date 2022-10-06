export class Constants {
    // Colors
    static readonly BACKGROUND_COLOR = '#00E673';
    static readonly TILE_BORDER_COLOR = '#AAAAAA';

    // Zoom properties of the canvas
    static readonly DEFAULT_ZOOM = 11;
    static readonly MAX_ZOOM = 13;
    static readonly MIN_ZOOM = 8;

    // Tile size (same as default Google Map)
    static readonly TILE_SIDE_LENGTH = 256;

    // Number of tiles on canvas (under minimum zoom) in the latitude and longitude direction (should both be even for symmetry)
    static readonly MAX_LATITUDE_TILES = 8;
    static readonly MAX_LONGTITUDE_TILES = 16;

    // Latitude and longitutde range of the whole screen: for example, latitude range would be [-MAX_CANVAS_LATITUDE, MAX_CANVAS_LATITUDE]
    // Set up so that there is about half a tile left over around the canvas
    static readonly MAX_CANVAS_LATITUDE = 360 / Constants.TILE_SIDE_LENGTH * Constants.MAX_LATITUDE_TILES / 2;
    static readonly MAX_CANVAS_LONGTITUDE = 360 / Constants.TILE_SIDE_LENGTH * Constants.MAX_LONGTITUDE_TILES / 2;

    // Latitude and longitutde range of the whole screen: for example, latitude range would be [-MAX_SCREEN_LATITUDE, MAX_SCREEN_LATITUDE]
    // Set up so that there is about half a tile left over around the canvas
    static readonly MAX_SCREEN_LATITUDE = 360 / Constants.TILE_SIDE_LENGTH * (Constants.MAX_LATITUDE_TILES + 1) / 2;
    static readonly MAX_SCREEN_LONGTITUDE = 360 / Constants.TILE_SIDE_LENGTH * (Constants.MAX_LONGTITUDE_TILES + 1) / 2;

    // Canvas size in our coordinate system
    static readonly CANVAS_WIDTH = 2048;
    static readonly CANVAS_HEIGHT = Constants.CANVAS_WIDTH / Constants.MAX_LONGTITUDE_TILES * Constants.MAX_LATITUDE_TILES;
}
