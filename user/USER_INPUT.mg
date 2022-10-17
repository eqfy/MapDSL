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

        CONSTANT centerPosition = (512,512);
        CONSTANT buildingSize = 100;
        CONSTANT bigBlocksOnly = true;
END_DEFINITIONS

OUTPUT
        VARIABLE defaultBlockSize = 0;

        IF bigBlocksOnly THEN
                defaultBlockSize = 512;
        ELSE
                defaultBlockSize = 256;
        END_IF

        createBlock(centerPosition, defaultBlockSize);

        CREATE highway from (0,centerPosition.y) to centerPosition;
        CREATE bridge from (0,0) to centerPosition;
        CREATE bus stop at (768, 384);

        CREATE water at (0, 0) (512, 0) (512, 1024) (0, 1024);

        VARIABLE lightPos = centerPosition;
        LOOP 5 TIMES
                CREATE traffic light at lightPos;
                lightPos = (lightPos.x + 100, lightPos.y);
        END_LOOP
END_OUTPUT

