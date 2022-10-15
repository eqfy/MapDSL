DEFINITIONS
        FUNCTION createStreetBlock(northWestPosition, blockSize) {
                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                CREATE traffic light at northWestPosition;
                CREATE traffic light at northEastPosition;
                CREATE traffic light at southWestPosition;
                CREATE traffic light at southEastPosition;

                CREATE street from northWestPosition to northEastPosition;
                CREATE street from northEastPosition to southEastPosition;
                CREATE street from southEastPosition to southWestPosition;
                CREATE street from southWestPosition to northWestPosition;
        }
        
        FUNCTION createTrafficLight(position) {
                CREATE traffic light at position;
        } 

        FUNCTION createCity(northWestPosition, blockSize) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP
        }

        CONSTANT centerPosition = (512,512);
        CONSTANT defaultBlockSize = 256;
END_DEFINITIONS

OUTPUT
        createStreetBlock(centerPosition, defaultBlockSize);
        createStreetBlock((centerPosition.x + defaultBlockSize, centerPosition.y), defaultBlockSize);

        createCity((1024,1024), 124);
        CREATE highway from (0,centerPosition.y) to centerPosition;
        CREATE bridge from (0,0) to centerPosition;

        createTrafficLight(centerPosition);
        CREATE stop sign at (512, 256);
        CREATE bus stop at (768, 384);
        CREATE train stop at (1024, 384);

        VARIABLE loops= 10;     

        VARIABLE eastStreetLightPosition = (centerPosition.x, centerPosition.y);

        LOOP 10 TIMES
            createTrafficLight(eastStreetLightPosition);
            eastStreetLightPosition = (eastStreetLightPosition.x + defaultBlockSize, eastStreetLightPosition.y);
        END_LOOP

        CREATE street from (0,0) to (256,100);
        VARIABLE middleY = 1024;
        VARIABLE middleX = middleY;
        VARIABLE middlePosition = (middleX,middleY);
        CREATE highway from (0,middleY) to middlePosition;
        CREATE bridge from middlePosition to (2048, 0);
        CREATE bus stop at (500,240);
        VARIABLE trafficLightPosition = (1000,1000);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
        CREATE train stop at (100,100);
        VARIABLE positionVariable = (100,100);
        VARIABLE secondPositionVariable = positionVariable;
        VARIABLE number = 10 + 1000 - positionVariable.x;
        VARIABLE fun = (positionVariable.x + number, number - secondPositionVariable.y);
END_OUTPUT
