import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';
import { ChatService } from '../chat/chat.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _http: HttpClient,
               private _cs: ChatService,
               private _router: Router,
               private _alert: AlertService
             ) { this._alert.check(); }

  url = "/api/rooms";

  ngOnInit() {
  }

  onCreate () {
    this._http.post(this.url, null)
      .subscribe( response => {
        //console.log(result)
        //this._cs.setRoom(result['id']);
        this._router.navigate(['chat', response['id']]);
      });
  }

  onJoin (room: String) {
    this._router.navigate(['chat', room]);
  }

}
