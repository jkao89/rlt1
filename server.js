const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const firebase = require('firebase');

const api = require('./routes/api');

// firebase setup
var config = {
    apiKey: "AIzaSyB-DQg1hsjvahSpmocBBOGJfqPK3ueYGEQ",
    authDomain: "rlt1-e45db.firebaseapp.com",
    databaseURL: "https://rlt1-e45db.firebaseio.com",
    projectId: "rlt1-e45db",
    storageBucket: "rlt1-e45db.appspot.com",
    messagingSenderId: "639560879071"
  };
firebase.initializeApp(config);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
