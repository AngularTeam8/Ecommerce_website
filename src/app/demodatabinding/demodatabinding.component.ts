import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodatabinding',
  templateUrl: './demodatabinding.component.html',
  styleUrls: ['./demodatabinding.component.css']
})
export class DemodatabindingComponent implements OnInit {
  department : string = "Support";
 
  allowNewServer = false;
  serverCreationStatus = 'No server Created ???';
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;

    }, 2000);
   }

  

  ngOnInit() {
  }
  saveData(){
    alert('Button Clicked')
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was Created...';

  }
}
