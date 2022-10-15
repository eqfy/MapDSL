# Map Generator Language (.mg) Documentation

## The Basics

### Positions (x,y)

Positions are in the format `(x, y)`, where x and y are any two expressions that evaluate to integers.

#### Position Usage examples:

```
CREATE bus stop at (500,240);
VARIABLE trafficLightPosition = (1000,600 + 50);
CREATE traffic light at trafficLightPosition;
CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
```

### Creating markers

Creating markers can be done by specifying a marker type, and a location like: `CREATE [bus stop, traffic light, stop sign, or train stop] at (x,y);`

#### CREATE Usage examples:

```
CREATE bus stop at (500,240);
VARIABLE trafficLightPosition = (1000,1000);
CREATE traffic light at trafficLightPosition;
CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
CREATE train stop at (100,100);
```

### Creating Streets, Highways, and Bridges

Creating streets can be done by specifying a street type, a start location, and an end location: `CREATE [street, highway, or bridge] from (x1,y1) to (x2,y2);`

#### CREATE Usage examples:

```
CREATE street from (0,0) to (100,100);
VARIABLE middleY = 1024;
VARIABLE middleX = middleX;
VARIABLE middlePosition = (middleX,middleY);
CREATE highway from (0,middleY) to middlePosition;
CREATE bridge from middlePosition to (2048, middlePosition.y);
```

## Variables and Constants

### Variable Declarations

Variables are a place to store data that you want to refer to in many locations. You can declare a variable inside functions, or inside the [OUTPUT block](#reassigning-variables), and they can be used only after they have been declared. They can be declared by : `VARIABLE myVariableName = v` where `v` can be another variable name, a position, or any other value that evaluates to an integer.

#### VARIABLE Declaration examples:

```
VARIABLE positionVariable = (100,100);
VARIABLE secondPositionVariable = positionVariable;
VARIABLE number = 10 + 1000 - positionVariable.x;
VARIABLE fun = (positionVariable.x + number, number - secondPositionVariable.y);
```

### Reassigning Variables

Variables can be reassigned at any point after they have been declared.

Variable Reassignment example:

```
VARIABLE positionVariable = (100,100);
VARIABLE number = 10 + 1000 - positionVariable.x;
positionVariable = (positionVariable.x, number);
```

### Constant Declarations

Constants are a place to store data that you want to refer to in many locations, anywhere in the program. You can declare a constant only inside the [DEFINITIONS block](#reassigning-variables), and it can be used anywhere in the program. They can be declared by : `CONSTANT myConstantName = v` where `v` can be another variable name, a position, or any other value that evaluates to an integer. Constants can not be reassigned after they are declared.

#### CONSTANT Declaration examples:

```
CONSTANT positionVariable = (100,100);
CONSTANT secondPositionVariable = positionVariable;
CONSTANT number = 10 + 1000 - positionVariable.x;
CONSTANT fun = (positionVariable.x + number, number - secondPositionVariable.y);
```

## Functions

### Function Declarations

Declaring functions allow for the quick creation of certain street or marker patterns throughout different locations in the map. Functions do not return a value; instead, they are simply another way of creating things on the map. Functions can take in any number of inputs (ie. parameters/arguments), each separated by a comma. Functions can then declare variables, use loops, call other functions, and create any number of streets or markers.

#### FUNCTION Declaration examples:

```
FUNCTION newTL(position) {
	CREATE traffic light at position;
}

FUNCTION createStreetBlock(northWestPosition, blockSize) {
	VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
	VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
	VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

	newTL(northWestPosition);
	newTL(northEastPosition);
	newTL(southWestPosition);
	newTL(southEastPosition);

	CREATE street from northWestPosition to northEastPosition;
	CREATE street from northEastPosition to southEastPosition;
	CREATE street from southEastPosition to southWestPosition;
	CREATE street from southWestPosition to northWestPosition;
}

FUNCTION createCity(northWestPosition, blockSize) {
	LOOP 3 TIMES
		createStreetBlock(northWestPosition, blockSize);
		createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
		createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
		northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
	END_LOOP
}
```

### Function Calls

Function calls can be made either within other functions, or within the [OUTPUT block](#reassigning-variables).

#### Function call examples:

```
newTL(1024, 1024);
createCity((1024,1024), 128);
VARIABLE newBlockLocation = (0,1024);
createStreetBlock(newBlockLocation, 128);
```

## Loops

Loops can be used to execute any number of statements any number of times. You must specify the number of times to loop.

#### LOOP example usage:

```
VARIABLE eastStreetLightPosition = (512,512);
LOOP 5 TIMES
	createTrafficLight(eastStreetLightPosition);
	eastStreetLightPosition = (eastStreetLightPosition.x + defaultBlockSize, eastStreetLightPosition.y);
END_LOOP
```

```
FUNCTION createCity(northWestPosition, blockSize) {
	LOOP 3 TIMES
		createStreetBlock(northWestPosition, blockSize);
		createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
		createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
		northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
	END_LOOP
}
```

## Program Structure

### OUTPUT Block

These are required. Output blocks contain all of the statements that are meant specifically to build the map. The output block can contain variable declarations, variable reassignments, function calls, and loops.

#### OUTPUT Block Example:

```
OUTPUT
	CREATE street from (0,0) to (100,100);
	VARIABLE middleY = 1024;
	VARIABLE middleX = middleX;
	VARIABLE middlePosition = (middleX,middleY);
	CREATE highway from (0,middleY) to middlePosition;
	CREATE bridge from middlePosition to (2048, middlePosition.y);
END_OUTPUT
```

### DEFINITIONS Block

These are optional. If you define a DEFINITIONS block, it must be above the OUTPUT block. Definition blocks contain all of the constant and function declarations.

#### DEFINITIONS Block Example:

```
DEFINITIONS
        FUNCTION createStreetBlock(northWestPosition, blockSize) {
                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                CREATE traffic light at northWestPosition;
                CREATE traffic light at northEastPosition;
                CREATE traffic light at southWestPosition;
                CREATE traffic light at southEastPosition;

                CREATE street from northWestPosition to northEastPosition;
                CREATE street from northEastPosition to southEastPosition;
                CREATE street from southEastPosition to southWestPosition;
                CREATE street from southWestPosition to northWestPosition;
        }

        FUNCTION createTrafficLight(position) {
                CREATE traffic light at position;
        }

        FUNCTION createCity(northWestPosition, blockSize) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP
        }

        CONSTANT centerPosition = (512,512);
        CONSTANT defaultBlockSize = 256;
END_DEFINITIONS
```

### DEFINITIONS Block

These are optional. If you define a DEFINITIONS block, it must be above the OUTPUT block. Definition blocks contain all of the constant and function declarations.

## Entire Program

To sum things up: here is a list of everything that is allowed in each section of the program.

- DEFINITIONS block
  - FUNCTION declarations
    - Variable Declarations
    - Loops
    - Create statements
    - Variable reassignments
  - CONSTANT declarations
- OUTPUT block
  - Function calls
  - Create statements
  - Loops
  - Variable declarations
  - Variable reassignments

#### Program example:

```
DEFINITIONS
        FUNCTION createStreetBlock(northWestPosition, blockSize) {
                VARIABLE northEastPosition = (northWestPosition.x + blockSize, northWestPosition.y);
                VARIABLE southEastPosition = (northWestPosition.x + blockSize, northWestPosition.y - blockSize);
                VARIABLE southWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);

                CREATE traffic light at northWestPosition;
                CREATE traffic light at northEastPosition;
                CREATE traffic light at southWestPosition;
                CREATE traffic light at southEastPosition;

                CREATE street from northWestPosition to northEastPosition;
                CREATE street from northEastPosition to southEastPosition;
                CREATE street from southEastPosition to southWestPosition;
                CREATE street from southWestPosition to northWestPosition;
        }

        FUNCTION createTrafficLight(position) {
                CREATE traffic light at position;
        }

        FUNCTION createCity(northWestPosition, blockSize) {
                LOOP 3 TIMES
                        createStreetBlock(northWestPosition, blockSize);
                        createStreetBlock((northWestPosition.x + blockSize, northWestPosition.y), blockSize);
                        createStreetBlock((northWestPosition.x + blockSize + blockSize, northWestPosition.y), blockSize);
                        northWestPosition = (northWestPosition.x, northWestPosition.y - blockSize);
                END_LOOP
        }

        CONSTANT centerPosition = (512,512);
        CONSTANT defaultBlockSize = 256;
END_DEFINITIONS

OUTPUT
        createStreetBlock(centerPosition, defaultBlockSize);
        createStreetBlock((centerPosition.x + defaultBlockSize, centerPosition.y), defaultBlockSize);

        createCity((1024,1024), 124);
        CREATE highway from (0,centerPosition.y) to centerPosition;
        CREATE bridge from (0,0) to centerPosition;

        createTrafficLight(centerPosition);
        CREATE stop sign at (512, 256);
        CREATE bus stop at (768, 384);
        CREATE train stop at (1024, 384);

        VARIABLE loops= 10;

        VARIABLE eastStreetLightPosition = (centerPosition.x, centerPosition.y);

        LOOP 10 TIMES
            createTrafficLight(eastStreetLightPosition);
            eastStreetLightPosition = (eastStreetLightPosition.x + defaultBlockSize, eastStreetLightPosition.y);
        END_LOOP

        CREATE street from (0,0) to (256,100);
        VARIABLE middleY = 1024;
        VARIABLE middleX = middleY;
        VARIABLE middlePosition = (middleX,middleY);
        CREATE highway from (0,middleY) to middlePosition;
        CREATE bridge from middlePosition to (2048, 0);
        CREATE bus stop at (500,240);
        VARIABLE trafficLightPosition = (1000,1000);
        CREATE traffic light at trafficLightPosition;
        CREATE stop sign at (trafficLightPosition.x, 1000 - trafficLightPosition.y);
        CREATE train stop at (100,100);
        VARIABLE positionVariable = (100,100);
        VARIABLE secondPositionVariable = positionVariable;
        VARIABLE number = 10 + 1000 - positionVariable.x;
        VARIABLE fun = (positionVariable.x + number, number - secondPositionVariable.y);
END_OUTPUT

```
