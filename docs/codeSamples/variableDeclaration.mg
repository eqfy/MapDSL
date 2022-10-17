OUTPUT
        VARIABLE positionVariable = (100,100);
        VARIABLE secondPositionVariable = positionVariable;
        VARIABLE number = 10 + 1000 - positionVariable.x;
        VARIABLE fun = (positionVariable.x + number, number - secondPositionVariable.y);
END_OUTPUT

