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
  habilitado = true;

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.siguientes();
    this.postsService.nuevoPost.subscribe(post => {
      this.posts.unshift(post);
    });
  }

  recargar(event) {
    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];
  }

  siguientes(event?, pull: boolean = false) {
    this.postsService.getPosts(pull).subscribe((resp: RespuestaPosts) => {
      console.log(resp);
      this.posts.push(...resp.posts);
      if (event) {
        event.target.complete();
        // desactivar el infinite scroll para evitar la carga cuando llegue el final
        if (resp.posts.length === 0) {
          this.habilitado = false;
        }
      }
    });
  }
}
