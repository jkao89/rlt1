import { Component, OnInit, Inject } from '@angular/core';

import  { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as io from 'socket.io-client';

import { ChatService } from './chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private socket;
  url = 'http://18.217.240.92:8080';
  name: String;
  messages = [];

  constructor(public dialog: MatDialog) {
    this.socket = io();
    this.socket.on('broadcast', (content) => {

      //if (content.type == 'user-message') {
        this.messages.push(content);
      //}

    });

    let dialogRef = this.dialog.open(NameDialog, {
     width: '250px',
     disableClose: true
   });

   dialogRef.afterClosed().subscribe(result => {
     this.name = result;
   });

  }

  ngOnInit() {


  }

  onSend(message) {
    if (message) {
      this.socket.emit('message', {
        room: 'mikesTestRoom',
        username: this.name,
        message: message
      });
    }
  }

  onJoin(){
    this.socket.emit('join', {
      room: 'mikesTestRoom',
      username: this.name
    });
  }

}

@Component({
  selector: 'name-dialog',
  template: `
  <h1 mat-dialog-title>Hi!</h1>
  <div mat-dialog-content>
    <p>Please enter a nickname:</p>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value.name)">
      <mat-form-field>
        <input matInput placeholder="Name" name="name" [ngModel]="name" autocomplete="off" required>
      </mat-form-field>
      <button class="btn btn-sm btn-success" type="submit" [disabled]="f.invalid">Join</button>
    </form>
  </div>
  `
})
export class NameDialog {

  constructor(public dialogRef: MatDialogRef<NameDialog>) { }

  onSubmit(name) {
    this.dialogRef.close(name);
  }

}
