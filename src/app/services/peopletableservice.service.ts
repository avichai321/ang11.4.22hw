import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopletableserviceService {
  private readonly peopleserver = 'https://fakestoreapi.com/users';

  constructor(private peopletableinner:HttpClient) { 

  }
  getPeopletable(){
    return this.peopletableinner.get(`${this.peopleserver}`);
  }
}
