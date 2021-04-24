import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.articles$ = this.postService.getArticles()
    .pipe(
      map(res => res.articles)
    );
  }

}
