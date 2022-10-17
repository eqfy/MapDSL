OUTPUT
        VARIABLE trafficLightPosition = (100,600 - 500 + 25);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 200 - trafficLightPosition.y);
END_OUTPUT



