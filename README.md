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
