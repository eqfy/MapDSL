DEFINITIONS
        CONSTANT positionVariable = (100,100);
        CONSTANT secondPositionVariable = positionVariable;
        CONSTANT number = 10 + 1000 - positionVariable.x;
        CONSTANT fun = (positionVariable.x + number, number - secondPositionVariable.y);
END_DEFINITIONS

OUTPUT
        CREATE stop sign at (0,0);
END_OUTPUT



