// import { Component, OnInit } from '@angular/core';
// import { Service1Service } from '../Services/service1.service';
// import { UserService } from '../Services/user.service';


// @Component({
//   selector: 'app-comp1',
//   templateUrl: './comp1.component.html',
//   styleUrls: ['./comp1.component.css']
// })
// export class Comp1Component implements OnInit {

//   products = {};
//   datas = {}

//   constructor(private objService: Service1Service,private objUser: UserService) { }

//   ngOnInit() {
//     var obj = this.objUser.getUsers();
   
//    obj.subscribe(datas=> {
//     console.log('Data from Server : ',datas);
//   this.datas = datas
//    })

//     // const objService = new Service1Service();
//     this.products = this.objService.products;
    
//   }
//   // Created Object of Service
//   hello(){
//     // const objService = new Service1Service();
//     this.objService.hello();
//   }

  
// }
// ==================================================================
import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  products = {};
  users={};
  constructor(private objService: Service1Service,private objUser: UserService) { }

  ngOnInit() {
    // const objService = new Service1Service();
    this.products = this.objService.products;

    var obj = this.objUser.getUsers();
   
   obj.subscribe(res=> {
   
    console.log(res)
  this.users = res;
   })
  }

}