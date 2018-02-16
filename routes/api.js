var express = require('express');
var router = express.Router();
var database;
var dbHelper;
// var jwt = require('express-jwt');
const cryptoRandomString = require('crypto-random-string');


// Stores firebase database reference in variable
router.use('/', function(req, res, next) {
  database = req.app.db;    // firebase database reference
  dbHelper = req.app.dbHelper;
  next();
});


// Returns single room, id parameter = room id
// Success : code 200, returns room
// Failure : code 404
router.get('/rooms/:id', function(req, res) {
  var room = dbHelper.getRoom(req.params.id);
  room.then((result) => {
    if (result) {
      var roomObj = dbHelper.convertRoomObj(result);
      res.status(200).json(roomObj);
    } else {
      res.status(404).end();      // Room not found
    }
  });
});

// Delete single chatroom and all users and messages in it
// Returns code 200
router.delete('/rooms/:id', function(req, res) {
  var room = dbHelper.deleteRoom(req.params.id);
  room.then((result) => {
    res.status(200).json(result);
  });
});

// Create new room, returns room id and url
// Success : code 200, returns room
// Failure : code 400, room id already exists 
router.post('/rooms', function (req, res) {
  var room = dbHelper.createRoom(cryptoRandomString(20));
  room.then((result) => {
    if (result) {
      var roomObj = dbHelper.convertRoomObj(result);
      res.status(200).json(roomObj);
    } else {
      res.status(400).end();
    }
  });
});

// Adds user to room, id parameter = room id
// Success : status code 200, returns user count in snapshot property
// Failure : status code 400, user id for room already exists
router.post('/rooms/:id/users', function (req, res) {
  var user = dbHelper.addUser(req.params.id, req.body.userId);
  user.then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).end();
    }
  });
});


// Removes user from  user, id parameter = room id
router.delete('/rooms/:id/users', function (req, res) {
  var user = dbHelper.deleteUser(req.params.id, req.body.userId);
  user.then(() => {
    res.status(200).end();
  });
});


module.exports = router;