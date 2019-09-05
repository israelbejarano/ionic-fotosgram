import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

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

  constructor(private postService: PostService, private route: Router) {}



  async crearPost() {
    console.log(this.post);
    const creado = await this.postService.crearPost(this.post);
    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    };
    this.route.navigateByUrl('/main/tabs/tab1');
  }

}
