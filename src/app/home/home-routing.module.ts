import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: MainComponent, pathMatch: 'full' },
      { path: 'faq', component: FaqComponent }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
