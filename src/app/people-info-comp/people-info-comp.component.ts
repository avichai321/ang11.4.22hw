import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeopletableserviceService } from '../services/peopletableservice.service';


@Component({
  selector: 'app-people-info-comp',
  templateUrl: './people-info-comp.component.html',
  styleUrls: ['./people-info-comp.component.css']
})
export class PeopleInfoCompComponent implements OnInit {
insideinfo:any = {};
  constructor(private singlePerson:PeopletableserviceService) {
    this.insideinfo= singlePerson.getOnePerson(this.insideinfo.id).subscribe((per)=>{
      this.insideinfo= per;
    })
   }

  ngOnInit(): void {
  }

}
