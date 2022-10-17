DEFINITIONS
        FUNCTION createCity(northWestPosition, blockSize, citySize) {
                LOOP citySize TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP
        }
END_DEFINITIONS

OUTPUT
        VARIABLE defaultBlockSize = 32;
        VARIABLE eastStreetLightPosition = (512,512);

        eastStreetLightPosition = eastStreetLightPosition + 1;
        
        LOOP 5 TIMES
                CREATE traffic light at eastStreetLightPosition;
                eastStreetLightPosition = (eastStreetLightPosition.x + defaultBlockSize, eastStreetLightPosition.y);
        END_LOOP
END_OUTPUT



