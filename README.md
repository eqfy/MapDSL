# Project1Group9

## Milestone 3

### Mockup of concrete language design (as used for your first user study)
Please see docs/documentation.txt for the document provided for the user study. This document describes the language, as well as gives a concrete example. Then provides the user a map and asks them to  draw it using our language. See docs/questionsForUserStudy.txt to see **examples** of the types of questions I asked the user.

### Notes about first user study
Our user was not exactly our target audience, however, he had the same level of technical knowledge our target audience would have. He had some experience with programming / moderate technical knowledge, but not extensively.

He felt that the language was fairly straightforward to understand and use. I will note, however, that the file he created (to produce the example map) did not leverage some aspects of the language, such as CONSTANTS.

### Any changes to original language design
As of now, none.


### Progress vs. roadmap; any changes to plans
Compared to the docs/Timeline + Tasks.pdf provided in Milestone 2, we are ahead of schedule. The Grammar, parser, and ast creation is fully complete. And the project is set up with both a frontend and a backend, sending information back and forth through HTTP requests. 

As for the backend: We are now implementing a visitor pattern to assist in visiting the AST nodes and further leveraging this to translate the input (which could have variables, functions, etc) into a simple list of CREATE statements (the statements that actually put things on the map, translated into a interfaced json object). 

As for the frontend: We are now working on taking in a list of CREATE statements (the statements that actually put things on the map, translated into a interfaced json object), and then drawing them onto the map.

These two teams are currently working entirely seperately. The frontend team should be done within a week, and we hope to have a small working demo by next Fridays meeting.


## Milestone 2

### Questions for TA / Feedback from TA
- whitespace can be handled easily through a few different options (kyle took a photo)
- would be good to include loops if we are not allowing recursion
- would be good to include comments on our draft inputs to describe each component
  
### Summary of Progress
- Features almost finalized
- Grammar almost finalized
- Rough timeline finished

### Timeline / Division of Work
See Timeline + Tasks.pdf in project dir


### Example Input

see draftInput.txt in project dir

### Draft Grammar

see draftGrammar.txt in project dir

### Language Features SEMI-FINAL
The language will enable users to create a diagram with:
- Components:
  - Streets:
    - Shape: straight
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
- Loops

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

