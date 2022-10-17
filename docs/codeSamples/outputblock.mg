OUTPUT
        CREATE street from (500,500) to (250,250);
        VARIABLE middleY = 500;
        VARIABLE middleX = middleY;
        VARIABLE middlePosition = (middleX,middleY);
        CREATE highway from (0,middleY) to middlePosition;
        CREATE bridge from middlePosition to (middleX, 0);
END_OUTPUT


