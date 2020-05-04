<a name="README"><img src="http://www.dmuth.org/files/nodejs-dark.png" heigth="300px" width="300px"/></a>

# Node.js: Tutorial

Use this tutorial as a guide to learn Node.js. Each unit contains an annotated lesson with working examples.

Topics
================
- Introduction
- Events
- Streams
- File System Manipulation
- Uploading Files
- Modules
- NPM
- Express
- Express Routes
- Socket.io
- Persisting Data with Redis

Suggested prerequisites
====================
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

Introduction
====================
```Javascript
/*
 Node.js

 - Allows you to build scalable network applications using JavaScript on the server-side.
 - Runs on top of the V8 JavaScript Runtime (same that is running on the Chrome browser)

 What can you build?

 - Web socket Server
 - File Upload client
 - Ad Server
 - Real-time data apps

 Misconceptions

 - Node.js is not a web framework
 - Node.js is not multi-threaded


 The event loop

 - The first time node interprets the js code and executes it, it registers the events it finds
 - Once the script has been executed, node starts the event loop, which checks for events continuously
 - Once node finds a new event, it will trigger the callback associated with such event
 - Allows us to write code that is non-blocking

 The event Queue

 - Queues the events for the event loop
 - Processes the events, one at a time

 */


/* How to run node.js */
// In this example, we will create a node server and serve an HTTP response

// Use the 'require' keyword to load modules(libraries)
var http = require('http');
// In general, you need to specify a call-back function with most of the Node modules methods
http.createServer(function (request, response) {
    response.writeHead(200); //Status code in header
    response.write("Introduction"); //Response body
    response.end(); //Close the connection
}).listen(8080); //Port in which node will listen for connections

console.log('Listening on port 8080...');

/* Run the following cmd to start node and run the server
 node '01 - Introduction.js'
 */

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
 */
```

Events
====================
```Javascript
/* Events

 - Similar to how the DOM works, Node.js triggers events and handles the callback functions
 - Many objects in Node emit events, in general, these are inherited from the EventEmitter constructor
 */
// Loading the EventEmitter constructor
var EventEmitter = require('events').EventEmitter;

//In this case, we want the logger to emit Events by adding a listener
var logger = new EventEmitter();

// The following code demonstrates the syntax for listening to the error event,
// and executing the callback function
logger.on('error', function(message) {
    console.log('ERR: ' + message);
});

// The following code triggers the 'error' event
logger.emit('error', 'This is the first error');
logger.emit('error', 'This is the second error');

/* Run the following cmd to start node and listen/generate events
 node '02 - Events.js'

 You should see the following output:

 ERR: This is the first error
 ERR: This is the second error

 */
```

Streams
====================
```Javascript
/* Streams

 When writing applications that depend consistently on network access or accessing files on the disk,
 it is important to understand and optimize how the data is being transferred,
 this is an excellent use-case for Node.js.

 Stream:

 - Streams are like channels, where data flows through
 - There are two main different types: readable and writeable
 - Readable stream: Inherits from EventEmitter

 */
var http = require('http');

// 'request' is a readable stream
// 'response' is a writeable stream
http.createServer(function(request, response) {
    // With the following example, we print to the console the data that we get from the client
    response.writeHead(200);

    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = request.read())) {
            response.write(chunk);
            console.log(chunk);
        }
    });
    request.on('end', function(){
        response.end('- end of request');
    });

}).listen(8080);

//Note: This example could be simplified by using:
/*
 http.createServer(function (request, response) {
 response.writeHead(200);
 // pipe helps us write to a writeable stream as soon as you read from a readable stream
 request.pipe(response);
 }).listen(8080);
 */

console.log('Listening on port 8080...');

/*
 Run the following cmd to start node and run the server:

 node '03 - Streams.js'

 Run the following cmd to make an HTTP request to your local server:

 curl -d 'from client' http://localhost:8080

 Expected response:

 "from client- end of request"
 */
```

Modules
====================
```Javascript
/*
Modules:

- Libraries that are loaded in order to use them in the current context
- The 'require' keyword is used to load them

*/
var moduleFunction = function(){
    console.log("Module loaded");
}
// In order to expose this method (make it public), we need to use module.exports
// 'exports' defines what 'require' returns
module.exports = moduleFunction;

// Explicitly setting a function as a public method (same behavior as previous example)
/*
 exports.moduleExport = function(){
 console.log("Module loaded by using exports");
 }
 */

/*
 To run, go to "8 - Module Loader"
*/
```
Install
====================
```Terminal
npm install
```

Run the tutorial (each file is numbered)
====================
```Terminal
node '01 - Introduction.js'
```
```Terminal
node '02 - Events.js'
```
```Terminal
node '03 - Streams.js'
```

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://martinchavezaguilar.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/martinchavez)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:info@martinchavezaguilar.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/martinchavezaguilar)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/martinchavezag)

Continue Learning
====================
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>
<a name="README">[<img src="http://nodejs-cloud.com/img/128px/nodejs.png" width="50px" height="50px" />](https://github.com/MartinChavez/Node.js-Tutorial)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/square.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJs-Basics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/angularadvanced.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJS-Advanced-Topics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/CSHARP.png" width="50px" height="50px" />](https://github.com/MartinChavez/CSharp)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/linqblack.png" width="50px" height="50px" />](https://github.com/MartinChavez/LINQ)</a>
<a name="README">[<img src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif" width="50px" height="50px" />](https://github.com/MartinChavez/jQueryBasics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcss.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcssblack.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS-Advanced-Topics)</a>
