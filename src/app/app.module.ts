import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PeopleTableCompComponent } from './people-table-comp/people-table-comp.component';
import { PeopleInfoCompComponent } from './people-info-comp/people-info-comp.component';

const Peoplerou: Routes = [
  {path:'' ,component:AppComponent},
  {path: 'people-table-comp/:id', component:PeopleInfoCompComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PeopleTableCompComponent,
    PeopleInfoCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Peoplerou)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
