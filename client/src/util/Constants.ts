export class Constants {
    // Colors
    static readonly CANVAS_BACKGROUND_COLOR = '#99FF99';
    static readonly TILE_BORDER_COLOR = '#E6E6E6';

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

    // For rendering of components

    // StreetOuput
    static readonly STREET_COLOR = "#FFFFFF";
    static readonly BRIDGE_BACK_COLOR = "#FF9900";
    static readonly HIGHWAY_FRONT_COLOR = "#FFFF4D";
    static readonly HIGHWAY_BACK_COLOR = "#595959";

    static readonly STREET_WEIGHT = 5;
    static readonly BRIDGE_STREET_BACK_WEIGHT = 10;
    static readonly HIGHWAY_FRONT_WEIGHT = 2;
    static readonly HIGHWAY_BACK_WEIGHT = 15;

    static readonly STREET_LEGEND = "./street_legend.svg";
    static readonly BRIDGE_LEGEND = "./bridge_legend.svg";
    static readonly HIGHWAY_LEGEND = "./highway_legend.svg";
    
    // MarkerOutput
    static readonly BUS_STOP_PATH = "./bus_stop.svg";
    static readonly STOP_SIGN_PATH = "./stop_sign.svg";
    static readonly TRAFFICE_LIGHT_PATH = "./traffic_light.svg";
    static readonly TRAIN_STOP_PATH = "./train_stop.svg";

    static readonly MARKER_SCALE = 50;
    static readonly LEGEND_SCALE = 25;
}
