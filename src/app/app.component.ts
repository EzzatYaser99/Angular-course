import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fName: String = "Ezzat";
  lName: String = "yaser";
  result:boolean=false;
age:number=20;
  constructor() {

    setTimeout(()=>{this.result=true},5000)

  }
  getAge(){

     return this.age;
  }

}
