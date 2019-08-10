const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const PORT = 5000;
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Database Connection
mongoose
    .connect('mongodb+srv://nitesh:nitesh00@project1-xeny0.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(() => console.log('mongodb connection established.'))
    .catch((err) => console.log(`Error: ${err.message}`));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// making views folder static
app.use(express.static(__dirname + '/views'));

// importing routes
try {
    app.use(require('./routes/url'));
} catch (error) {
    console.log(error.message);
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));