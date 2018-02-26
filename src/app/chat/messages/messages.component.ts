import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['../chat.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Observable<any>;

  constructor (private _cs: ChatService) {
    this.messages = this._cs.getMessages();
  }

  ngOnInit() {
  }


}
