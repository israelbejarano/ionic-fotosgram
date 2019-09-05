import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages: string[] = [];
  post = {
    mensaje: '',
    coords: null,
    posicion: false
  };

  constructor(private postService: PostService) {}



  crearPost() {
    console.log(this.post);
    this.postService.crearPost(this.post);
  }

}
