import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  data: string = 'Angular Batch 7';
  
  getDataFromChild(value) {
    console.log(value); 
  }
  courses: string[]  = 
   [
      'Angular',
      'React',
      '.net' ,
      'Java' ,
      'DevOps'
  ];

  
}