OUTPUT
        VARIABLE positionVariable = (100,100);
        VARIABLE number = 10 + 1000 - positionVariable.x;
        positionVariable = (positionVariable.x, number);
        number = number + 1;
        number = true;
END_OUTPUT

