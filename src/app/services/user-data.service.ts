import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  constructor() { }
  public userData(){
    return [
    {fname:'Tejash',lname:'Variya'},
    {fname:'Parth',lname:'Sondigara'},
    {fname:'Arvind',lname:'Maurya'}
  ];}

  public ActivatedUser:boolean=false;
  public Activatedserver = new EventEmitter<boolean>();
}
