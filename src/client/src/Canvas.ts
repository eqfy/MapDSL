import { Constants } from "./constants";
import { CoordinateUtils } from "./coordinateUtils";
import { CreateStatement, isMarkerOutput, isStreetOutput, MarkerOutput, StreetOutput } from "./CreateStatement";

// The class with everything related to rendering
// TODO: might refactor the map configuration from index.ts to here, currently just have it passed in when constructed
export class Canvas {
    map: google.maps.Map;
    // separate each type of components into layers
    // TODO: this also allows us to act on a specific type (for example, hide all markers on high zoom level)
    polylines: google.maps.Polyline[];
    markers: google.maps.Marker[];

    constructor(map: google.maps.Map, statements: CreateStatement[]) {
        this.map = map;

        const polylines: google.maps.Polyline[] = [];
        const markers: google.maps.Marker[] = [];

        if (statements) {
            // populate streetOutputs and makrerOutputs based on statement type
            const streetOutputs: StreetOutput[] = [];
            const markerOutputs: MarkerOutput[] = [];

            statements.forEach(function (statement: CreateStatement) {
                if (isStreetOutput(statement)) {
                    // street
                    streetOutputs.push(statement);
                } else if (isMarkerOutput(statement)) {
                    // marker
                    markerOutputs.push(statement);
                } else {
                    // stub for future stuff or invalid types
                }
            });

            // then create corresponding google components by layers (bottom to top: polylines, markers)
            // for instead of forEach used here to avoid this keyword context issue within closure
            for (let i = 0; i < streetOutputs.length; i ++) {
                polylines.push(this.createPolyline(streetOutputs[i]));
            }

            for (let i = 0; i < markerOutputs.length; i ++) {
                markers.push(this.createMarker(markerOutputs[i]));
            }
        }
        this.polylines = polylines;
        this.markers = markers;
    }

    // RENDERING SECTION

    // generate a google polyline based on street configuration
    // TODO: implementation
    createPolyline(streetOutput: StreetOutput): google.maps.Polyline {
        console.log(`Created a polyline for streetOutput: ${JSON.stringify(streetOutput)}`);
        
        let strokeColor = Constants.STREET_COLOR;
        if (streetOutput.type == 'Bridge') {
            strokeColor = Constants.BRIDGE_COLOR;
        } else if (streetOutput.type == 'Highway') {
            strokeColor = Constants.HIGHWAY_COLOR;
        }

        return new google.maps.Polyline({
            path: [
                CoordinateUtils.convertCoordinateToLatLng(streetOutput.startPosition),
                CoordinateUtils.convertCoordinateToLatLng(streetOutput.endPosition)
            ],
            strokeColor,
            strokeOpacity: 1,
            strokeWeight: 5,
            map: this.map
        })
    }

    // generate a google marker based on marker configuration
    // TODO: implementation
    createMarker(markerOutput: MarkerOutput): google.maps.Marker {
        console.log(`Created a marker for streetOutput: ${JSON.stringify(markerOutput)}`);

        let url = Constants.BUS_STOP_PATH;
        if (markerOutput.type == 'StopSign') {
            url = Constants.STOP_SIGN_PATH;
        } else if (markerOutput.type == 'TrafficLight') {
            url = Constants.TRAFFICE_LIGHT_PATH;
        } else if (markerOutput.type == 'TrainStop') {
            url = Constants.TRAIN_STOP_PATH;
        }

        return new google.maps.Marker({
            position: CoordinateUtils.convertCoordinateToLatLng(markerOutput.position),
            icon: {
                url,
                scaledSize: new google.maps.Size(Constants.MARKER_SCALE, Constants.MARKER_SCALE)
            },
            map: this.map
        })
    }
}
