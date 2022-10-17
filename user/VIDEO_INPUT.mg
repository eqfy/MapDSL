CANVAS_SIZE = 4000 by 4000;
DEFINITIONS
        FUNCTION newStopSign(position) {
                CREATE stop sign at position;
        }

        FUNCTION newTrafficLight(position) {
                CREATE traffic light at position;
        }

        FUNCTION newTrainStop(position) {
                CREATE train stop at position;
        }

        FUNCTION newBusStop(position) {
                CREATE bus stop at position;
        }

        FUNCTION createStreetBlock(northWestPosition, blockSize) {
                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                newTrafficLight(northWestPosition);
                newTrafficLight(northEastPosition);
                newTrafficLight(southWestPosition);
                newTrafficLight(southEastPosition);
                createBuilding((northWestPosition.x + 5, northWestPosition.y - 5), blockSize - 10);
                CREATE street from northWestPosition to northEastPosition;
                CREATE street from northEastPosition to southEastPosition;
                CREATE street from southEastPosition to southWestPosition;
                CREATE street from southWestPosition to northWestPosition;

               
        }

        FUNCTION createCity(northWestPosition, blockSize) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP
                
        }

        FUNCTION createWater(topLeftCorner) {
                isWater = true;
                CREATE water at
                        topLeftCorner
                        (topLeftCorner.x, topLeftCorner.y + waterSize)
                        (topLeftCorner.x + waterSize, topLeftCorner.y + waterSize)
                        (topLeftCorner.x + waterSize, topLeftCorner.y);
        }

        FUNCTION createWaterSize(bottomleft, size) {
                isWater = true;
                CREATE water at
                        bottomleft
                        (bottomleft.x, bottomleft.y + size)
                        (bottomleft.x + size, bottomleft.y + size)
                        (bottomleft.x + size, bottomleft.y);
        }

        FUNCTION createWaterRow(bottomleft, size) {
                isWater = true;
                LOOP 3 TIMES
                        createWaterSize(bottomleft, size);
                        bottomleft = (bottomleft.x + size, bottomleft.y);
                END_LOOP
                
        }

        FUNCTION createBuilding (northWestPosition, buildingSize) {
                VARIABLE northEastPosition = (northWestPosition.x + buildingSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + buildingSize, northWestPosition.y - buildingSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - buildingSize);
                CREATE building at northWestPosition northEastPosition southEastPosition southWestPosition;
        }

        FUNCTION createBridge(topLeftCorner, isWater) {
                IF (isWater) THEN
                CREATE bridge from (centerX + threeBlocks, centerY) to (centerX + threeBlocks, centerY - defaultBlockSize);
                END_IF
                isWater = false;
        }

         FUNCTION createCustomBridge(start, end, isWater) {
                IF (isWater) THEN
                CREATE bridge from start to end;
                END_IF
                isWater = false;
        }

        FUNCTION createHighway(start, end) {
                CREATE highway from start to end;
        }

        CONSTANT waterSize = 75;
        CONSTANT centerX = 1024;
        CONSTANT centerY = 1024;
        CONSTANT centerPosition = (centerX, centerY);
        CONSTANT defaultBlockSize = 128;
        CONSTANT threeBlocks = defaultBlockSize + defaultBlockSize + defaultBlockSize;
END_DEFINITIONS



OUTPUT
        VARIABLE isWater = false;
        CREATE highway from (0, centerY - defaultBlockSize) to (2048, centerY - defaultBlockSize);
        createHighway((2048, centerY - defaultBlockSize), (2048, 2048));
        createHighway((2048, 2048), (3072, 3072));
        createHighway((3072, 3072), (3072, 0));
        createHighway((3072, 3072), (0, 3072));
        createHighway((1500, 3072), (1500, 4000));
        createHighway((3072, 500), (3500, 500));
        CREATE street from (centerX, centerY - defaultBlockSize) to (centerX + defaultBlockSize, centerY);
        newTrafficLight((centerX, centerY - defaultBlockSize));
        createCity((centerX + defaultBlockSize,centerY + threeBlocks), 128);
        createWater((1375, 925));
        CREATE bridge from (centerX + threeBlocks, centerY) to (centerX + threeBlocks, centerY - defaultBlockSize);
 

        createWaterRow((0, 0), 880);
        CREATE water at (2048, 0)
                        (2048, 2048)
                        (3072, 2048)
                        (3072, 0);



        VARIABLE busStopX = (2560, 2304);
        newBusStop(busStopX);
        CREATE street from (2560, 2560) to (2560, 2176);
        newStopSign((2560, 2176));
        CREATE street from (2560, 2176) to (2816, 2176);        
        newTrainStop ((2816, 2176));
        createBuilding((2688, 2304), 120);
       
        CREATE bridge from (2048, 1536) to (3072, 1536);
END_OUTPUT
