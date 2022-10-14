# Project1Group9 Milestones

## Milestone 5

### Status of Implementation

Project is fully implemented, aside from small additions/improvements. In other words, our project currently takes a user input according to our DSL documentation (still needs to be complete), and it is successfully converted into a visual map. If there are errors, the user is told so on the screen.

### Status/results of final user study

We completed one user study after we fully finished our implementation. After getting the user to walk through their thoughts while implementing an example map, and questioning them afterwards, they did not have any critical dislikes about our language itself. They only language specific comment they made was that they didnt think having "DEFINITIONS" and "OUTPUT" as separate sections was entirely necessary. However, the sections are in place to guide less technical users, so we think they are a good thing to keep. 

The users biggest complaint was not being able to see error messages for their input, and not being able to see the map change in real time. They simply had a text file, then had to use the command line to run "npm run start" to see their map open up (assuming no errors). 

We agreed that the user experience was terrible. So we created a VS Code language extension - users now have syntax highlighting for .mg files (the file extension for our DSL), descriptive error messages displayed to them in real time, and the ability to click a "build map" button directly within the VS Code editor to see the map. Then they can refresh the map as they code to see it change as they code.

We plan to do another user study today or tomorrow (Friday or Saturday)

### Any changes to the language design

Nothing as of now.

### Planned timeline for the remaining days

Friday or Saturday another user study to hopefully get feedback on our language. Saturday last minute changes to language, accordingly. Saturday develop user documentation and a demo map for the video. Sunday record the video and submit.

## Milestone 4

### Status of Implementation

As you will see, there is typed called CreateStatement found in src/server/src/outputBuilder/CreateStatement.ts and src/client/src/CreateStatement.ts. The backend's job is to transform the user input (using our DSL) into a list of "Create Statements" (which is a simple json object), and then pass this to the frontend. So, the frontend only needs to handle a simple list of "Create Statements", and thats it - they do not need to know how ANYTHING about the user input itself.

Currently, the backend is passing a "testing" list of "Create Statements" to the frontend. The frontend is pretty much entirely built to properly render the list of "Create Statements", aside from small tweaks we may decide to make later on. In other words, streets and markers are correctly rendered on the map.

However, the backends job is still not complete. We still need to transform the users input (using our DSL) into a simple list of "Create Statements" to pass to the frontend. This is our only remaining task. We have the foundation set up, its just about filling in the function stubs and finishing off the implementation.

### Planned timeline for the remaining days

We hope to have the backend completely finished by Wednesday. Which means we would have a fully functioning application - we could write anything in our DSL, our backend would transform it to a list of "Create Statements", pass that to the frontend, and the frontend would render them on the map. Once this is finished, we hope to complete our final user studies Wednesday->Friday. Then make small adjustments Friday if necessary. Then record our video Friday->Sunday.

### Plans for final user study

Our plans our to have a fully functioning implementation for a user to test on Wednesday. Then find relevant users (which we did not ask in our first user study) to test our DSL.__

## Milestone 3

### Mockup of concrete language design (as used for your first user study)

Please see docs/documentation.txt for the document provided for the user study. This document describes the language, as well as gives a concrete example. Then provides the user a map and asks them to draw it using our language. See docs/questionsForUserStudy.txt to see **examples** of the types of questions I asked the user.

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
