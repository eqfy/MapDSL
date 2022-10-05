import { CreateStatement, MarkerOutput, StreetOutput } from "./CreateStatement";

const STREET_OUTPUT_TYPES = ['Highway', 'Street', 'Bridge'];
const MARKER_OUTPUT_TYPES = ['BusStop', 'TrafficLight', 'StopSign', 'TrainStop'];

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
                if (STREET_OUTPUT_TYPES.includes(statement.type)) {
                    // street
                    streetOutputs.push(statement as StreetOutput);
                } else if (MARKER_OUTPUT_TYPES.includes(statement.type)) {
                    // marker
                    markerOutputs.push(statement as MarkerOutput);
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
        return new google.maps.Polyline();
    }

    // generate a google marker based on marker configuration
    // TODO: implementation
    createMarker(markerOutput: MarkerOutput): google.maps.Marker {
        console.log(`Created a marker for streetOutput: ${JSON.stringify(markerOutput)}`);
        return new google.maps.Marker();
    }
}
