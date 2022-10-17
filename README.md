# Project1Group9 Map Generator

### Folder structure

```
/                # Root directory.
|- docs/         # User documentation.
|- milestones/   # Milestone related documents used throughout the project.
|- user/         # .mg files that can be used for testing
|- client/       # Our frontend client and VS Code client
|- server/       # Our backend server for map generation (handles requests from frontend client), and our language server (handles requests from VS Code extension client)
```

## Milestone Grading

See milestones/MILESTONES.md

## User Documentation

See docs/UserDocumentation.md

## Installation / Usage Instructions

1. Open VS Code (required)
2. Open this project
3. Run `npm install` in the project directory
4. Run `npm compile` in the project directory
5. Navigate to the "Run and Debug" section of VS Code. Go to left panel, or hit (Command + Shift + D)
6. Go to the top left corner where the run configurations can be found
7. Click on "Launch Client". This should open up a new VS Code workspace
8. Within the new VS Code workspace, open up the project directory /user folder. This folder contains test files that you can work with - but you can also create any .mg files you want within this folder.
9. Edit file
10. Click the tools icon in the top right corner of the file. This should open up a new window with the map that corresponds to the file you are currently editing. If you can not find the button, navigate to http://localhost:1337/ in your browser. If you make edits within any .mg file, just refresh the window - the map in the browser window will always display your last edited file.
11. If the program gets stuck (ie syntax highlighting stops working, error messages out of date, etc), close the testing VS Code window, and repeat steps 5-11. This is a known bug, but difficult to reproduce - could not find what causes it.
12. If you have any troubles at all, just text 604-368-4730 first (so I do not think you are a spam caller), then call the same number 5 minutes later. Text/call at any time - I will answer unless I am sleeping.

## Grading Notes
- Please see the end of docs/UserDocumentation.md for known bugs etc.

## Current Implementation VS. Desired Implementation
Current implementation runs static checks and dynamic checks every single time a user makes a change. The entire document is passed back and forth. Then the document is written to a file, which is then read by the map server, which is then parsed YET AGAIN and then passed to the frontend for map generation. This whole process is unbelievably inefficient, and I am very much aware of that. I just dont have the time to adjust it.
Inefficient Flow: User edits document->parsed once for errors (both static and dynamic)->parsed another time for semantic tokens->written to file->read from file->parsed again->passed to frontend

Here Is what I dream (but dont have time to implement)
The language server takes the current document input, parses it ONCE, but then only parses relevant parts when the document is updated. Upon update, the relevant information could be
passed to the map server through ICP for storage until the frontend requests for the updated map.
Ideal Flow: User edits document->parsed once for errors->if static error, stop (and handle it in some reasonable way, such as displaying an error on the map webpage)->if no static errors, check for dynamic errors, populate syntax highlighting info, and pass the list of CreateStatements to Map Server through ICP-> frontend HTTP requests CreateStatements from Map Server->map server passes relevant data
