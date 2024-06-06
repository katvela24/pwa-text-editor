# Just Another Text Editor (J.A.T.E), a PWA

##Description

J.A.T.E is a Progressive Web Application (PWA) that runs in the browser as well as offline. It can be installed locally on your machine. This application runs regardless of browser supported function.

J.A.T.E uses an IndexedDB database and the idb package. 
This application is deployed to Render.
To access it in production continue reading the documentation!

##Usage 

### User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

### Acceptance Criteria

GIVEN a text editor web application

WHEN I open my application in my editor
THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button
THEN I download my web application as an icon on my desktop

WHEN I load my web application
THEN I should have a registered service worker using workbox

WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application

## Installation

This application is deployed on Render.

To run J.A.T.E locally:

Pull down and/or branch this repository
Run npm i to install all dependencies
Use npm run start to invoke the application

## License

This project is licensed under the MIT license

## Technologies Used


JavaScript
IndexedDB
Express
NodeJS
Babel
Mini-CSS-Extract Plugin
Webpack+Workbox
Concurrently

## Testing

No testing done.

## Contact

You may find this and other proejcts at 
To visit this repository: git@github.com:katvela24/pwa-text-editor.git

