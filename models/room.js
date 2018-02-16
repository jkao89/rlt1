export class Room {
    
    constructor(roomId, timeStamp) {
        this.id = roomId;
        this.created = timeStamp;
        this.userCount = 0;
        this.users = {};
    }
}

// Example:

// {
//     id: "d38afe959f77791ae39f",
//     created: 1518344112221,
//     userCount: 0,
//     users: {}
// }