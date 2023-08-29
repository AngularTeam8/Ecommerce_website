import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  products = {};

  photos = {};

  constructor(private objService: Service1Service) { }

  ngOnInit() {

    // const objService = new Service1Service();

    this.products= this.objService.products;

  }
 
 




  // Created Object of Service
  hello(){
    // const objService = new Service1Service();
    this.objService.hello();
  // API Emp List
  }

}
