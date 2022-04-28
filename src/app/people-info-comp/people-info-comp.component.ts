import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopletableserviceService } from '../services/peopletableservice.service';


@Component({
  selector: 'app-people-info-comp',
  templateUrl: './people-info-comp.component.html',
  styleUrls: ['./people-info-comp.component.css']
})
export class PeopleInfoCompComponent implements OnInit {

insideinfo:any={};
id:number=0;
  constructor(private singlePerson:PeopletableserviceService ,private route:ActivatedRoute ) {
    this.route.params.subscribe(params => {
      this.id=params['id']
    })
   this.singlePerson.getOnePerson(this.id).subscribe((per:any)=>{
      this.insideinfo= per;

    })
   }

  ngOnInit(): void {
  
  }
   
}
