const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
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

app.db = firebase.database();

var CLIENT_ID = 'hmU5ww6oHOucYB9hXfN33ZJf8EdKD018';
var CLIENT_SECRET = '018EJZDOwrALAkxcudBmmVUL70dG4bZnuyDUVAB93H6-o-kGgF9fqW9ppeAS9RcE';
var authObj = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'http://chitchat-cepheus.com'
}

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

// Send test requests to test file
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_chat.html'));
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Catch socket connections over http server
io.on('connection', function(socket){
    console.log('User connected');

    socket.on('join', function(payload){
        console.log('User joined room ' + payload.room);
        socket.join(payload.room);
        io.to(payload.room).emit('broadcast', "New user '" + payload.username + "' has joined the room.");
    });
    
    socket.on('message', function(payload){
        io.to(payload.room).emit('broadcast', payload.username + ": " + payload.message);
    });
  
    socket.on('disconnect', function(){
    console.log('User disconnected');
    });
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, () => console.log(`Running on localhost:${port}`));
