OUTPUT
        CREATE bus stop at (250,200);
        VARIABLE trafficLightPosition = (100,600 - 500 + 25);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 300 - trafficLightPosition.y);
END_OUTPUT

