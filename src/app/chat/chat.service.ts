import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ChatService {

  username: String   = "";
  room:     String   = "";
  users = [];
  userCount;
  messages = [];

  constructor(private _ss: SocketService, private _route: ActivatedRoute) {

    this._ss.response().subscribe( response => {
      this.handleResponse(response);
    });

  }

  handleResponse (response) {
    if (response.type == 'user-joined') {
      response.room_info.users.forEach( user => {
        this.users.push(user)
      });
      this.userCount = this.users.length;
    }
    this.messages.push(response);
  }

  event (type, content?) {
    return {
      type      : type    || null,
      content   : content || null,
      room      : this.room,
      username  : this.username,
      timeStamp : new Date()
    }
  }

  join () {
    this._ss.send(this.event('user-joined'));
  }

  send (message) {
    this._ss.send(this.event('user-message', message));
  }

  setupChat (details) {
    this.username = details.username;
    this.room = details.room;
  }

  setRoom (room: String) {
    this.room = room;
  }

  getRoom () {
    return this.room;
  }

  getUsers () {
    return this.users;
  }
  getUserCount () {
    return this.userCount;
  }
  getMessages (): String[] {
    return this.messages;
  }

}
