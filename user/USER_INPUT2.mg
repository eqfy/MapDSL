DEFINITIONS
        FUNCTION createBlock(nwPosition, blockSize) {
                VARIABLE nePosition = (nwPosition.x + blockSize, nwPosition.y);
                VARIABLE sePosition = (nePosition.x, nePosition.y - blockSize);
                VARIABLE swPosition = (nwPosition.x, nwPosition.y - blockSize);

                CREATE street from nwPosition to nePosition;
                CREATE street from nePosition to sePosition;
                CREATE street from sePosition to swPosition;
                CREATE street from swPosition to nwPosition;
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

        VARIABLE eastStreetLightPosition = (centerPosition.x, centerPosition.y);
END_OUTPUT
