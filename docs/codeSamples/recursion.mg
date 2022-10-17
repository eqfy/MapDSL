DEFINITIONS
        FUNCTION createNHorizontalTrafficLightsRecursive(numberOfLights, position, gapSize) {
                IF(numberOfLights > 0) THEN
                        CREATE traffic light at position;
                        createNHorizontalTrafficLightsRecursive(numberOfLights - 1, (position.x + gapSize, position.y), gapSize);
                END_IF
        }

        FUNCTION createNHorizontalTrafficLightsWithLoop(numberOfLights, position, gapSize) {
                LOOP numberOfLights TIMES
                        CREATE traffic light at position;
                        position = (position.x + gapSize, position.y);
                END_LOOP
        }
END_DEFINITIONS

OUTPUT
        createNHorizontalTrafficLightsRecursive(10, (2000,2000), 100);
        createNHorizontalTrafficLightsWithLoop(10, (2000,2200), 100);
END_OUTPUT

