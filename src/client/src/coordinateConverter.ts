import { Constants } from './constants';
import { Position } from './CreateStatement';

export class CoordinateConverter {
    // Convert from our coordinate system to Google Maps LatLng system
    static convertCoordinateToLatLng(position: Position): google.maps.LatLngLiteral {
        const lng = Constants.MAX_CANVAS_LONGTITUDE * (-1 + 2 * position.x / Constants.CANVAS_WIDTH);
        const lat = Constants.MAX_CANVAS_LATITUDE * (-1 + 2 * position.y / Constants.CANVAS_HEIGHT);
        return { lat, lng };
    }

    // Convert from tile coordinate + zoom to our coordinate system
    static convertTileToCoordinate(tileCoordinate: google.maps.Point, zoom: number): Position {
        // zoom scale relative to the base line MIN_ZOOM
        const relative_zoom_scale = Math.pow(2, zoom - Constants.MIN_ZOOM);

        // how many coordinate pixels in our system per tile
        const ratio = Constants.CANVAS_WIDTH / Constants.MAX_LONGTITUDE_TILES / relative_zoom_scale;

        // canvas middle tile coordinate - for example, (128, 128) for zoom = 8
        const middleTile = Math.pow(2, zoom - 1);
        // bottom left tile coordinate - for example, (120, 132) for zoom = 8
        const bottomLeftTileX = middleTile - Constants.MAX_LONGTITUDE_TILES * relative_zoom_scale / 2;
        const bottomLeftTileY = middleTile + Constants.MAX_LATITUDE_TILES * relative_zoom_scale / 2;

        // bottom left tile should have (0, 0), so any other tile could get the coordinates (in our system) using that as a reference
        // note that y has negation so that user can use coordinate system as a natural Quadrant 1 (y increases as the position goes up)
        return { x: (tileCoordinate.x - bottomLeftTileX) * ratio, y: (bottomLeftTileY - tileCoordinate.y) * ratio };
    }
}
