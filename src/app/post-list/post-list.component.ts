import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  listOfPost: Post[]=[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listOfPost= this.postService.getPost();
  }

}
