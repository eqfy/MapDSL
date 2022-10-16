DEFINITIONS
        FUNCTION newTL(position) {
                CREATE traffic light at position;
        }

        FUNCTION createStreetBlock(northWestPosition, blockSize) {
                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                newTL(northWestPosition);
                newTL(northEastPosition);
                newTL(southWestPosition);
                newTL(southEastPosition);

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
                        (topLeftCorner.x, topLeftCorner.y + buildingSize)
                        (topLeftCorner.x + buildingSize, topLeftCorner.y + buildingSize)
                        (topLeftCorner.x + buildingSize, topLeftCorner.y);
        }


        CONSTANT buildingSize = 75;
        CONSTANT centerX = 1024;
        CONSTANT centerY = 1024;
        CONSTANT centerPosition = (centerX, centerY);
        CONSTANT defaultBlockSize = 128;
        CONSTANT threeBlocks = defaultBlockSize + defaultBlockSize + defaultBlockSize;
END_DEFINITIONS



OUTPUT
        CREATE highway from (0, centerY - defaultBlockSize) to (2048, centerY - defaultBlockSize);
        CREATE street from (centerX, centerY - defaultBlockSize) to (centerX + defaultBlockSize, centerY);
        newTL((centerX, centerY - defaultBlockSize));
        createCity((centerX + defaultBlockSize,centerY + threeBlocks), 128);
        createWater((1375, 925));
        CREATE bridge from (centerX + threeBlocks, centerY) to (centerX + threeBlocks, centerY - defaultBlockSize);

        VARIABLE busStopX = centerX - threeBlocks + 100;
END_OUTPUT
