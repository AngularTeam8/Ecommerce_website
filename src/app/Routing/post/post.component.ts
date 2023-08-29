import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  arrPosts: Post[] = [];
  
  constructor(private _postsService: PostService) { }

  ngOnInit() {
      this._postsService.getPosts().subscribe(res => {
        this.arrPosts = res;
      })
  } 
}
  // ngOnInit() {
  //   //let id = this.route.snapshot.params['id'];
  //   this.route.paramMap.subscribe((params) => {
  //     let id = params.get('id');
  //     this._postsService.getpostById(2).subscribe(res => {
  //       console.log('post deatils', res);
  //     })
  //   })
   
  // }


