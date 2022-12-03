import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  //selector: '[app-student]',
  //template: '<h1>Ezzat</h1><app-person></app-person>',
  templateUrl: './student.component.html',
  /*styles: [`
  p{
    color: brown;

  }

  `],

   */
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  ngOnInit(): void {
  }

}
