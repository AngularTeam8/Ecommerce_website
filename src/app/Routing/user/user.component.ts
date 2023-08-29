import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  arrPosts: User[] = [];
  constructor(private _postsService: PostService, private _userService : UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (res: User[]) => {
        console.log(res);
        this.arrPosts = res;
      },
      error => {
        console.error(error);
      }
    );
  }
}