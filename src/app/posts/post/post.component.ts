import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from './../../interfaces/article';
import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleArticle } from 'src/app/interfaces/single-article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  article$: Observable<Article>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.article$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(id => this.postService.getArticle(id)),
        map(singleArticle => singleArticle.article),
        shareReplay(1),
      );
  }

}
