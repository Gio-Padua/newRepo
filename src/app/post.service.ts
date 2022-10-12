import { Injectable } from "@angular/core";
import { Post } from "./post.model";
@Injectable({providedIn: 'root'})
export class PostService {
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
          ),
          new Post(
            '10 Boracay Activities You Can Do In The New Normal',
            'https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg',
            'Welcome to Boracay one of the most beautiful beaches in the world! Though famed for its white-sand beaches and crystal blue waters, we locals can definitely say that Boracay knows how to pack on the fun thanks to all its exciting activities! Just in case youre in the area for a solid beach getaway  here are some activities in Boracay youll definitely want to indulge in.',
            'Felicia',
            new Date()
          )
    ];
    getPost(){
        return this.listOfPost;
    }
    deletePost(index: number){
      this.listOfPost.splice(index, 1);
    }
    
}