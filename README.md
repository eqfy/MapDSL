# Project1Group9

## Brief Project Description
In a general sense, our DSL will be used to create a simple map rendering from user input. Google Map's API will be used to help render the map. For the first iteration, we plan to only have the ability to define different maps consisting of roads and related trafic control elements that satisfy the DSL requirements. If we still have time after that, we plan to add other features like simple simulations of traffic, buildings, transit systems etc. This language will be targeted towards city/street planners. It is also targeted to hardcore simulation game ethuthiastes.


## Language Features
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


## Feedback from TA Discussion
- Introduce variables/functions/loops for developing the map
- Simulations (Stretch Goal)


## Follow-up Features (Stretch Goals)
- Advanced road types (e.g. roundabouts)
- Buildings, parks, bodies of water
- Traffic Simulations


## Example Input

see exampleInput.txt and exampleSpec.txt in project directory

