import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user : {};
  constructor(private _userService: UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._userService.getUsersById(id).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      error => {
        console.error(error);
      }
    );
  }
}