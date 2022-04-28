import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PeopletableserviceService } from '../services/peopletableservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-table-comp',
  templateUrl: './people-table-comp.component.html',
  styleUrls: ['./people-table-comp.component.css']
})
export class PeopleTableCompComponent implements OnInit {

  peopleinfo:any[]= [];
  constructor(private httptable:PeopletableserviceService)  { 
   this.httptable.getPeopletable().subscribe((fulltable:any)=>{
     this.peopleinfo=fulltable;
      }
    );
  }
 
  ngOnInit(): void {
  }
  
}
