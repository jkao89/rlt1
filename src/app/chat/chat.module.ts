import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { ChatRoutingModule } from './chat-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { NameDialog } from './chat.component';

import { SocketService } from './socket.service';
import { ChatService } from './chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  declarations: [
    NameDialog
  ],
  entryComponents: [
    NameDialog
  ],
  exports: [

  ],
  providers: [
    SocketService,
    ChatService
  ]
})
export class ChatModule { }
