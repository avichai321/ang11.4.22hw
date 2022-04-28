import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopletableserviceService } from '../services/peopletableservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-info-comp',
  templateUrl: './people-info-comp.component.html',
  styleUrls: ['./people-info-comp.component.css']
})
export class PeopleInfoCompComponent implements OnInit {

insideinfo:any = {};
  constructor(private singlePerson:PeopletableserviceService ) {
   this.singlePerson.getOnePerson(this.insideinfo.id).subscribe((per:any)=>{
      this.insideinfo= per;
    })
   }

  ngOnInit(): void {
  
  }
   
}
