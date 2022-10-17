DEFINITIONS
        FUNCTION isOne(num, isTrue) {
                IF (-1 + 2 * ((1 * 5) + 2) / 7 + 3 + num * 3 == 1) THEN
                        CREATE stop sign at (0, 0);
                ELSE_IF num > 1 OR isTrue THEN
                        CREATE bus stop at (0, 0);
                ELSE
                        CREATE train stop at (0, 0);
                END_IF
        }
END_DEFINITIONS

OUTPUT
        VARIABLE a = true AND false; 
        isOne(-1, a);
END_OUTPUT
