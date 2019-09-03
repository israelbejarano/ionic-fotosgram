import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RespuestaPosts } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((resp: RespuestaPosts) => {
      console.log(resp);
    });
  }

}
