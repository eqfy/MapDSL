OUTPUT
        CREATE bus stop at (500,240);
        VARIABLE trafficLightPosition = (1000,1000);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
        CREATE train stop at (100,100);
END_OUTPUT

