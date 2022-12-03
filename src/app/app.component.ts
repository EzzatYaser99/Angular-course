import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytext:String = " A simple primary alert—check it out!";
  doTask(){
    console.log("ok")
    this.mytext="hi Ezzat"

  }




}
