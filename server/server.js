console.log('Look ma, my first express app!');

// Load the express library
// from node_node_modules/express
const express = require('express');

//Create our "app" (server)
const app = express();

// Tell express where to find 
// all of our "public" files 
// aka client-side files
// aka "static-assets"
app.use(express.static('./server/public'));

// Listen for requests
const port = 5000;
app.listen(port, function () {
    // kind of like our onReady function
    console.log('app is up and running');
});
