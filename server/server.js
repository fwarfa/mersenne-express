console.log('Look ma, my first express app!');

// Load the express library
// from node_node_modules/express
const express = require('express');

const bodyParser = require('body-parser');

//Create our "app" (server)
const app = express();

// My Data
const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movie where you are also the murderer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

// Tell express where to find 
// all of our "public" files 
// aka client-side files
// aka "static-assets"
app.use(express.static('./server/public'));

//setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET
app.get('/quotes', function (req,res) {
    // kind of like our onReady function
    console.log('app is up and running,');
    console.log('req.route.path is ', req.route.path);

    //send back data to the client
    //array of quotes objects
    res.send(quotes);
    
});

app.get('/first-quote', function (req,res) {
    // kind of like our onReady function
    console.log('app is up and running,');
    res.send(quotes[0]);
    
});

// POST
app.post('/quotes', function (req,res) {
    console.log('Woohoo');
    // Body parser gives us req.body
    // which includes
    console.log('req.body', req.body);
    let newQuote = req.body;

// Validate our new quote
if (!newQuote.author || !newQuote.text) {
    // set status code to 400 (client messed up)
    // and send back a usefull message in the response body
    res.status(400).send({
        message: 'Missing a required field! Try again!'
    });
    // END OF FUNCTION
    // OTHERWISE WELL BE SENDING MULTIPLE MESSAGES
    return;
}

    quotes.push(newQuote);

    res.sendStatus(200);
})


// Listen for requests
const port = 5000;
app.listen(port, function () {
    // kind of like our onReady function
    console.log('app is up and running, response');
});

