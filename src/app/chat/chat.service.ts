import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {

  messages = [];

  constructor() {}

  sendMessage(message){
    //this.messages.next(message);
  }

}
