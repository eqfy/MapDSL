DEFINITIONS
        FUNCTION createSquare(squareType, squareSize, nwPos) {
                VARIABLE nePos = (nwPos.x + squareSize, nwPos.y);
                VARIABLE sePos = (nwPos.x + squareSize, nwPos.y - squareSize);
                VARIABLE swPos = (nwPos.x, nwPos.y - squareSize);

                IF squareType == 1 THEN // squareType 1 means water
                        CREATE water at nwPos nePos sePos swPos;
                ELSE_IF squareType == 2 THEN // squareType 2 means water
                        CREATE building at nwPos nePos sePos swPos;
                END_IF
        }

        FUNCTION createStreetBlock(northWestPosition, blockSize, addStopLights) {


                IF blockSize <= blockSizeLimit THEN
                        // do nothing, the block size is good!
                ELSE_IF (blockSize / 2 < blockSizeLimit) THEN
                        // try to cut the block size in half first
                        blockSize = blockSize / 2;
                ELSE
                        // if cutting in half doesnt work, then just use the blockSizeLimit
                        blockSize = blockSizeLimit;
                END_IF

                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                IF addStopLights AND addMarkers THEN
                        newTL(northWestPosition);
                        newTL(northEastPosition);
                        newTL(southWestPosition);
                        newTL(southEastPosition);
                END_IF

                CREATE street from northWestPosition to northEastPosition;
                CREATE street from northEastPosition to southEastPosition;
                CREATE street from southEastPosition to southWestPosition;
                CREATE street from southWestPosition to northWestPosition;
        }

        FUNCTION createCity(northWestPosition, blockSize, addStopLights) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize, addStopLights);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize, addStopLights);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize, addStopLights);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP

        }

        FUNCTION newTL(position) {
                CREATE traffic light at position;
        }

        CONSTANT addMarkers = true;
        CONSTANT blockSizeLimit = 1000;
END_DEFINITIONS

OUTPUT
        createSquare(1, 500, (1000,1000));
        createSquare(2, 100, (1610,985));
        createCity((1600,1000), 128, true);
END_OUTPUT


