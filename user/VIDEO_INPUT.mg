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
                CREATE water at
                        topLeftCorner
                        (topLeftCorner.x, topLeftCorner.y + waterSize)
                        (topLeftCorner.x + waterSize, topLeftCorner.y + waterSize)
                        (topLeftCorner.x + waterSize, topLeftCorner.y);
        }

        FUNCTION createWaterSize(bottomleft, size) {
                CREATE water at
                        bottomleft
                        (bottomleft.x, bottomleft.y + size)
                        (bottomleft.x + size, bottomleft.y + size)
                        (bottomleft.x + size, bottomleft.y);
        }

        FUNCTION createWaterRow(bottomleft, size) {
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

        FUNCTION createBridge(isWater) {
                IF (isWater) THEN
                        CREATE bridge from (centerX + threeBlocks, centerY) to (centerX + threeBlocks, centerY - defaultBlockSize);
                END_IF
        }

         FUNCTION createCustomBridge(start, end) {
                CREATE bridge from start to end;
        }

        FUNCTION createHighway(start, end) {
                CREATE highway from start to end;
        }

        CONSTANT waterSize = 75;
        CONSTANT centerX = 1024;
        CONSTANT centerY = 1024;
        CONSTANT centerPosition = (centerX, centerY);
        CONSTANT defaultBlockSize = 128;
        CONSTANT threeBlocks = defaultBlockSize * 3;
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
        isWater = true;
        createBridge(isWater);

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
        newTrafficLight((2048, 1536));
        newTrafficLight((3072, 1536));
        newTrafficLight((3072, 3072));

        CREATE street from (2048, 2048) to (1536, 2048);
        CREATE street from (1536, 2048) to (1280, 2304);
        CREATE street from (1280, 2304) to (1024, 2048);
        CREATE street from (1280, 2304) to (1024, 2560);
        CREATE street from (1280, 2304) to (1536, 2560);
        newTrafficLight((1280, 2304));

        createBuilding((1024, 2374), 140);
        createBuilding((1215, 2560), 140);
        createBuilding((1408, 2380), 140);
        createBuilding((1210, 2196), 140);
        newTrainStop ((1024, 2048));
        newBusStop((1536, 2560));
        newBusStop((1024, 2560));

        CREATE street from (768, 3072) to (768, 3584);
        newBusStop((768, 3584));

        createWaterSize((0, 3072), 750);
        createWaterSize((0, 3822), 150);
        createWaterSize((150, 3822), 150);
        createWaterSize((300, 3822), 150);
        createWaterSize((450, 3822), 150);
        createWaterSize((600, 3822), 150);
        createBuilding((1024, 3584), 400);
        CREATE street from (768, 3456) to (1024,3456);

        createCity((1792,3840), 200);
        CREATE street from (1500, 3328) to (1792,3328);
        newTrafficLight((1792,3328));
        CREATE street from (3072, 3072) to (2390, 3600);

        CREATE street from (2816, 3270) to (2816, 3328);
        newBusStop((2816, 3328));
        newStopSign((2816, 3270));

        CREATE street from (3072, 3072) to (3840, 3840);
        CREATE street from (3840, 3840) to (3840, 500);
        CREATE street from (3840, 500) to (3500, 500);

        newStopSign((3840, 3840));
        newBusStop((3840, 3072));
        newBusStop((3840, 2048));
        newBusStop((3840, 1024));

        CREATE street from (3840, 500) to (3840, 300);
        newTrainStop((3840, 300));

        CREATE street from (3840, 1024) to (3328, 1024);

        CREATE street from (3840, 2048) to (3328, 2048);

        CREATE street from (3840, 3072) to (3328, 3072);

        createHighway((512, 3072), (512, 890));

        createBuilding((3328, 3000), 400);

        createBuilding((3328, 2500), 400);

        createBuilding((3328, 2000), 400);

        createBuilding((3328, 1500), 400);

        createBuilding((3328, 950), 400);

        newBusStop((1200, 1024));
END_OUTPUT
