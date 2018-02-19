import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';
import { JoinComponent } from './join/join.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: [
    MainComponent,
    FaqComponent,
    JoinComponent
  ],
  exports: [
    MainComponent,
    FaqComponent,
    JoinComponent
  ]
})
export class HomeModule { }
