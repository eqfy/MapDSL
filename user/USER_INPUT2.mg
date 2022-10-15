OUTPUT
        CREATE bus stop at (500,240);
        VARIABLE trafficLightPosition = (1000,600 + 50);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
END_OUTPUT