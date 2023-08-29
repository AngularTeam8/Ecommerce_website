import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-filter-pipe-assignment',
  templateUrl: './filter-pipe-assignment.component.html',
  styleUrls: ['./filter-pipe-assignment.component.css']
})
export class FilterPipeAssignmentComponent implements OnInit {
objService: any;

searchData: any[] = [];
searchTerm: string = '';

users: any=[];
namesearch: string = '';
constructor(private objUser: UserService) { }

ngOnInit() {
  
  var obj = this.objUser.getUsers();
   
   obj.subscribe(res=> {
   
    console.log(res)
  this.users = res;
  // console.log('test',this.users);
  
   })
  }

}