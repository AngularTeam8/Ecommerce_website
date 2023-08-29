import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styles: []
})
export class PipeDemoComponent implements OnInit {

  todaysDate = new Date();
  price: number = 5000;
  emp = [] = [
    { id: '1', name:'jack'},
    { id: '2', name:'Ron'},

  ]
  myObservable: Observable<unknown>;
  constructor() { }

  ngOnInit() {

    this.myObservable = new Observable((observer) => {
      console.log('myObservable start')
      setTimeout(() => {
        observer.next('Ang B7')
      }, 1000)
    })
    
  }

}
