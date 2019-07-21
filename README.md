# Electron Todo

## Overview

This Electron based application is an example of a Create React App generated UI that is supported by an Express powered REST API. The API and UI use a component based folder structure for consistency within the project. The API does not have a build step as this version of Electron uses Node 12. However if a typed language was added or the API is converted to the import syntax, then it could be added later.

## How to start developing

1. Git clone this repo
2. In the project root run ```npm i```. This will install the dependencies in the root of the project and then recursively install any dependencies in sub folders
3. Then run ```npm start``` to start build a development build of the app that will reload on changes where the UI is served up on port 3000 and the API on port 8008

**Tests can be ran with ```npm run test-api``` or ```npm run test-ui```**

## How to package for distribution

1. Once the dependencies have been install, run ```npm run build``` on Mac or ```npm run build-win``` on Windows (note that there is currently no Linux/Unix build)

## Ideas for improvement

1. Run the Express API in a new thread as to not overload the main electron thread when the app gets bigger
2. Add a logging and tracing framework to the API to assist in debugging
3. Encapsulate data source specific access functions in a utility. i.e when a database data source is used
4. Add a logging framework to the UI to allow client side errors to be captured
5. Move the API port and host into build/runtime configuration
6. Create UI automated tests
7. Convert to a typing system
8. Introduce a more fully featured state management framework like Redux in the UI when the app becomes more complex
