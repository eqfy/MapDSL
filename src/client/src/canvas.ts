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
                polylines.push(this.createPolyline(streetOutputs[i], map));
            }

            for (let i = 0; i < markerOutputs.length; i ++) {
                markers.push(this.createMarker(markerOutputs[i], map));
            }
        }
        this.polylines = polylines;
        this.markers = markers;
    }

    // RENDERING SECTION

    // generate a google polyline based on street configuration
    // TODO: implementation
    createPolyline(streetOutput: StreetOutput, map: google.maps.Map): google.maps.Polyline {
        console.log(`Created a polyline for streetOutput: ${JSON.stringify(streetOutput)}`);
        var color;
        if (streetOutput.type == "Highway") {
            color = "#ff9900";
        } else if (streetOutput.type == "Bridge") {
            color = "#b87333";
        } else if (streetOutput.type == "Street") {
            color = "#FFFFFF";
        } else {
            console.log(`ERROR GIVEN INVALID TYPE`);
            color = "#FF0000";
        }
        const path = new google.maps.Polyline({
            path: [CoordinateUtils.convertCoordinateToLatLng(streetOutput.startPosition),
                   CoordinateUtils.convertCoordinateToLatLng(streetOutput.endPosition)],
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 5,
            map: map
          });
        return path;
    }

    // generate a google marker based on marker configuration
    // TODO: implementation
    createMarker(markerOutput: MarkerOutput, map: google.maps.Map): google.maps.Marker {
        console.log(`Created a marker for streetOutput: ${JSON.stringify(markerOutput)}`);
        var imagePath;
        if (markerOutput.type == "BusStop") {
            
        } else if (markerOutput.type == "StopSign") {
            
        } else if (markerOutput.type == "TrafficLight") {
            
        } else if (markerOutput.type == "TrainStop"){
        
        } else {
            console.log(`ERROR GIVEN INVALID TYPE`);
            
        }
        const marker: google.maps.Marker = new google.maps.Marker({
            position:  CoordinateUtils.convertCoordinateToLatLng(markerOutput.position),
            map,
            icon: "./client/assets/bus_stop.svg"
          });
        return marker;
    }
}
