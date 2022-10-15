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

                LOOP 10 TIMES
                END_LOOP
        }

        FUNCTION createCity(northWestPosition, blockSize) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP

                LOOP 10 TIMES

                    fdsdada
                END_LOOP
        }


        CONSTANT centerX = 1024;
        CONSTANT centerY = 1024;
        CONSTANT centerPosition = (centerX, centerY);
        CONSTANT defaultBlockSize = 128;
        CONSTANT threeBlocks = defaultBlockSize + defaultBlockSize + defaultBlockSize;
END_DEFINITIONS



OUTPUT
        LOOP


        CREATE highway from (0, centerY - defaultBlockSize) to (2048, centerY - defaultBlockSize);
        CREATE street from (centerX, centerY - defaultBlockSize) to (centerX + defaultBlockSize, centerY);
        newTL((centerX, centerY - defaultBlockSize));
        createCity((centerX + defaultBlockSize,centerY + threeBlocks), 128);
        CREATE bridge from (centerX + threeBlocks, centerY) to (centerX + threeBlocks, centerY - defaultBlockSize);

        VARIABLE busStopX = centerX - threeBlocks + 100;
END_OUTPUT
