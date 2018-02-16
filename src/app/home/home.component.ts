import { Component, OnInit } from '@angular/core';

import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
