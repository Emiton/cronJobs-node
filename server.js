// Get the express package
const express = require('express');

// Construct express in order to use it, create instance of express app
const app = express();
const main = require('./routes/api/main');

// Give the app routes
app.get('/', (req,res) => res.send("Hello, world"));

app.use('/api/main', main);

// Check for PORT environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
    // comma notation automatically adds argument with a space
    //console.log('server running on port', port)
    console.log(`Server running on ${port}`) // use backtick in order to inject variables
});