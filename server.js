const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const api = require('./routes/api');
const firebase = require('firebase');

//  firebase setup
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

var dbHelper = require('./helpers/database')(app);
app.dbHelper = dbHelper;

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

// API location
app.use('/test', api);

/********************************************************************************
****************** HERE LIES SAM'S CHAT TESTING BULLSHIT ( <-- LOL )*************
********************************************************************************/
// Send test requests to test file
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_chat.html'));
});

// Sample main page for making a new chat room
app.get('/test_main', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_main.html'));
});
/********************************************************************************
****************************** ALL SAFE NOW *************************************
********************************************************************************/

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
        socket.username = payload.username;
        socket.room = payload.room;
        console.log(socket.rooms);
        let event = {
            type: 'user-joined',
            username: payload.username,
            timeStamp: new Date()
        };
        io.to(payload.room).emit('broadcast', event);
    });
    
    /* defunct for now
    socket.on('message', function(payload){
        let event = {
            type: 'user-message',
            username: payload.username,
            content: payload.message,
            timeStamp: new Date()
        };
        io.to(payload.room).emit('broadcast', event);
    });*/
    
    socket.on('event', function(payload){
        
        if (payload.type == 'user-joined') {
            console.log('User joined room ' + payload.room);
            socket.join(payload.room);
            socket.username = payload.username;
            socket.room = payload.room;
        }
        
        /*
        let event = {
            type: payload.type,
            username: payload.username,
            content: payload.message,
        };*/
        
        io.to(payload.room).emit('event', payload);
        
    });
  
    socket.on('disconnect', function(){
        let event = {
            type: 'user-disconnect',
            username: socket.username,
            timeStamp: new Date()
        };
        io.to(socket.room).emit('broadcast', event);
        //console.log(socket);
        console.log('User disconnected');
    });
    
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, () => console.log(`Running on localhost:${port}`));
