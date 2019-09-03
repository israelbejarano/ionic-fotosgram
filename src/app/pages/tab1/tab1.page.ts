import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RespuestaPosts, Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.siguientes();
  }

  siguientes(event?) {
    this.postsService.getPosts().subscribe((resp: RespuestaPosts) => {
      console.log(resp);
      this.posts.push(...resp.posts);
      if (event) {
        event.target.complete();
        // desactivar el infinite scroll para evitar la carga cuando llegue el final
        if (resp.posts.length === 0) {
          event.target.disabled = true;
        }
      }
    });
  }

}
