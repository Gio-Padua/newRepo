import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPost: Post[]=[
    new Post(
      'Best Beaches in the World',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
      'Lounge on the best Philippines beaches! If youre looking for pristine beaches with crystal clear waters and postcard-worthy views, the Philippines offers you a lot of choices! But which ones should you visit? Read on to learn about the countrys top beaches.',
      'Larena',
      new Date()

    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
