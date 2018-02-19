const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const api = require('./routes/api');
const firebase = require('firebase');
const cryptoRandomString = require('crypto-random-string');

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
app.get('/test2', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_chat2.html'));
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
    console.log('User connected to global socket');
    
    socket.on('event', function(payload){
        switch(payload.type) {
            
            case 'user-joined':
                /*  payload = { type: 'user-join',
                                room: string,
                                username: string,   }
                */
                
                // check if room exists in db
                
                //console.log('INSIDE JOIN');
                //console.log(payload);
                //console.log(socket.id);
                // check if payload.username is unique in db
                var user = dbHelper.addUser(payload.room, payload.username);
                user.then((result) => {
                    if (result) {
                        // if yes, add the client socket to socket.room
                        console.log('User joined room ' + payload.room);
                        socket.join(payload.room);
                        socket.username = payload.username;
                        socket.room = payload.room;
                        //console.log(socket.rooms);
                        
                        var room = dbHelper.getRoom(payload.room);
                        room.then((result) => {
                            if (result) {
                                // if yes, add the room object to the payload
                                payload.room_info = result;
                                payload.room_info.users = Object.keys(result.users);
                                payload.success = true;
                                
                                console.log(payload);
                                
                                // emit to all sockets in room
                                io.to(payload.room).emit('event', payload);
                            }
                            else {
                                // if no, add success:false, error:error_message to payload
                                payload.success = false;
                                payload.error = 'Room not found';
                                
                                // emit only to single client
                                console.log(socket.id);
                                io.to(socket.id).emit('event', payload);
                            }
                        });
                    }
                    else {
                        // if no, add success:false, error:error_message to payload
                        payload.success = false;
                        payload.error = 'username already taken';
                        
                        // emit only to single client
                        console.log(socket.id);
                        io.to(socket.id).emit('event', payload);
                    }
                });
                break;
            
            case 'user-message':
                /*  payload = { type: 'user-message',
                                room: string
                                content: string }
                */
                
                console.log(payload);
                
                // emit the entire payload to all sockets in room
                io.to(payload.room).emit('event', payload);
                break;
        }
    });
  
  
    socket.on('disconnect', function(){
        let event = {
            type: 'user-disconnect',
            username: socket.username,
            timeStamp: new Date()
        };
        io.to(socket.room).emit('event', event);
        //console.log(socket);
        console.log('User disconnected');
        // remove user from db
        // if user count = 0, delete room
    });
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, () => console.log(`Running on localhost:${port}`));
