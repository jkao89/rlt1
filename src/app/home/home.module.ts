import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    FaqComponent
  ],
  exports: [
    MainComponent,
    FaqComponent
  ]
})
export class HomeModule { }
