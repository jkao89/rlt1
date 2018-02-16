module.exports = function(app) {
    var database = app.db;
    
    var dbHelper = {};
    
    // Returns room object from database
    dbHelper.getRoom = function(roomId) {
        var roomRef = database.ref('rooms/' + roomId);
        return roomRef.once('value').then(function(snapshot) {
            return snapshot;
        });
    };
    
    // Converts a single room object returned from firebase to format below
    dbHelper.convertRoomObj = function(roomFB) {
        var roomId = Object.keys(roomFB)[0];
        return {
            id : roomId,
            created: roomFB[roomId].created,
            userCount: roomFB[roomId].userCount,
            users: roomFB[roomId].users
        };    
    };
    
    
    // Creates room object with current timestamp, returns null if room exists
    dbHelper.createRoom = function(roomId) {
        var roomsRef = database.ref('rooms');
        var room = {
            [roomId] : {
                'created' : Date.now(),
                'userCount' : 0,
                'users' : {}
            }
        };
        
        // Check if room with id already exists    
        return roomsRef.once('value')
        .then((snapshot) => {
            if (snapshot.hasChild(roomId)) { 
                return Promise.reject('room already exists');
            } else {
                return room;
            }
        // Create new room and return object
        }).then(() => {
            return roomsRef.update(room);
        }).then(() => {
            return room;
        }).catch(function(error) {
            console.log(error);
        });
    };
    
    // Deletes room object
    dbHelper.deleteRoom = function(roomId) {
        var roomRef = database.ref('rooms/' + roomId);
        return roomRef.remove().then(function(updates) {
            return updates;
        });
    };
    
    
    // Adds user to the database
    dbHelper.addUser = function(roomId, userId) {
        var roomRef = database.ref('rooms/' + roomId + '/userCount');
        var usersRef = database.ref('rooms/' + roomId + '/users');
        var user = { [userId] : true };
        // Check if user already exists
        return usersRef.once('value')
        .then((snapshot) => {
            if (snapshot.hasChild(userId)) {    
                return Promise.reject('user already exists');
            } else {
                return Promise.resolve(user);
            }
        }).then(() => {
            return usersRef.update(user);
        // Increment user count
        }).then(() => {
            return roomRef.transaction(function(currCount) {
                currCount++;
                return currCount;
            });
        }).catch(function(error) {
            console.log(error);
        });
    };       
        
    // Deletes user from the database    
    dbHelper.deleteUser = function(roomId, userId) {
        var roomRef = database.ref('rooms/' + roomId + '/userCount');
        var userRef = database.ref('rooms/' + roomId + '/users/' + userId);
        return userRef.remove()
        .then(function(updates) {
            console.log("User " + userId + " deleted from room " + roomId);
         }).then(() => {
            return roomRef.transaction(function(currCount) {
                currCount--;
                return currCount;
            });
        }).catch(function(error) {
            console.log("Error removing user: " + error.message);
        });
    };
    
    return dbHelper;
};