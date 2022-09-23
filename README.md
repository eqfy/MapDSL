# Project1Group9

## Milestone 2

### Questions for TA / Feedback from TA
1. lorem
2. lorem 2
3. lorem 3
4. lorem 4

### Summary of Progress
lorem

### Timeline / Division of Work
lorem

### Example Input

see draftInput.txt in project dir

### Draft Grammar

see draftGrammar.txt in project dir

### Language Features SEMI-FINAL
The language will enable users to create a diagram with:
- Components:
  - Streets:
    - Shape: straight, curved
    - Type: regular, highway, ramp, bridge
    - Name
    - Coordinates: startPos, endPos
  - Control elements (at Pos)
    - Stop signs
    - Traffic lights
  - Transit features:
    - Bus stops
    - Train stops
- Variables
- Functions

SIMULATION (Stretch Goal)
  - Direction: bi-direction, single direction
  - If/elif/else
  - Inhabitant:
     - Car
     - Bus
     - Train

## Milestone 1

### Brief Project Description
In a general sense, our DSL will be used to create a simple map rendering from user input. Google Map's API will be used to help render the map. For the first iteration, we plan to only have the ability to define different maps consisting of roads and related trafic control elements that satisfy the DSL requirements. If we still have time after that, we plan to add other features like simple simulations of traffic, buildings, transit systems etc. This language will be targeted towards city/street planners. It is also targeted to hardcore simulation game ethuthiastes.


### Language Features DRAFT
The language will enable users to create a diagram with:
- Components:
  - Streets:
    - Shape: straight, curved
    - Direction: bi-direction, single direction
    - Type: regular, highway, ramp, bridge
    - Name
    - Coordinates: startPos, endPos
  - Control elements:
    - Stop signs
    - Traffic lights
  - Transit features:
    - Bus stops
    - Train stops
  - Inhabitant:
    - Car
    - Bus
    - Train
- Variables:
  - Single components or a list of components
  - Allows mutation
- Control flow:
  - If/elif/else
  - Loops
- Functions:


### Feedback from TA Discussion
- Introduce variables/functions/loops for developing the map
- Simulations (Stretch Goal)


### Follow-up Features (Stretch Goals)
- Advanced road types (e.g. roundabouts)
- Buildings, parks, bodies of water
- Traffic Simulations


### Example Input

see exampleInput.txt and exampleSpec.txt in project directory

