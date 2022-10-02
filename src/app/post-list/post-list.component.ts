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

    ),
    new Post(
      'The Top 25 Islands in the World',
      'https://media.cntraveler.com/photos/6167f074d89b8ecb70c9531a/5:4/w_2495,h_1996,c_limit/RajaAmpat-GettyImages-979296970.jpg',
      'The best islands in the world, according to T+L readers, are the kind of Instagram-perfect destinations that travelers fantasize about on winter evenings: dreamy, sun-drenched landscapes surrounded by the bluest waters.',
      'Walsh',
      new Date()
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
