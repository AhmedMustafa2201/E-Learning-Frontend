import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  lesson:Article;
  Content:string="";
  Title:string="";
  sub!:Subscription;

  constructor(private article:ArticleService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.sub=this.article.getByID(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: res=>{
        this.lesson=res as Article;
        this.Title=this.lesson.title;
        this.Content=this.lesson.content

      }
    })
  }

}
