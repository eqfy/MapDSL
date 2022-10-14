DEFINITIONS
        FUNCTION createBlock(nwPosition, blockSize) {
                VARIABLE nePosition = (nwPosition.x + blockSize, nwPosition.y);
                VARIABLE sePosition = (nePosition.x, nePosition.y - blockSize);
                VARIABLE swPosition = (nwPosition.x, nwPosition.y - blockSize);

                CREATE highway from nwPosition to nePosition;
                CREATE highway from nePosition to sePosition;
                CREATE highway from sePosition to swPosition;
                CREATE highway from swPosition to nwPosition;
        }
        
        FUNCTION createTrafficLight(position) {
                CREATE traffic light at position;
        } 

        CONSTANT centerPosition = (512,512);
        CONSTANT defaultBlockSize = 256;
END_DEFINITIONS

OUTPUT
        createBlock(centerPosition, defaultBlockSize);
        createBlock((centerPosition.x + defaultBlockSize, centerPosition.y), defaultBlockSize);

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
END_OUTPUT
