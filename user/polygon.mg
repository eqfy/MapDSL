OUTPUT
        VARIABLE riverWidth = 25;
        VARIABLE riverLength = 1000;
        VARIABLE riverNWPos = (300,300);
        VARIABLE riverNEPos = (riverNWPos.x + riverLength, riverNWPos.y);
        VARIABLE riverSEPos = (riverNWPos.x + riverLength, riverNWPos.y - riverWidth);
        VARIABLE riverSWPos = (riverNWPos.x, riverNWPos.y - riverWidth);
        CREATE water at riverNWPos riverNEPos riverSEPos riverSWPos;

        VARIABLE buildingSize = 100;
        VARIABLE buildingSWPos = riverNWPos;
        VARIABLE buildingSEPos = (buildingSWPos.x + buildingSize, buildingSWPos.y);
        VARIABLE buildingNEPos = (buildingSEPos.x, buildingSEPos.y + buildingSize);
        VARIABLE buildingNWPos = (buildingSWPos.x, buildingSWPos.y + buildingSize);
        CREATE building at buildingSWPos buildingSEPos buildingNEPos buildingNWPos;
END_OUTPUT

