import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonService } from './../../../services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit,AfterViewInit {

  @ViewChild("video") videoUrl:any;
  id:number;


  lesson:any;
  private subscriptions: Subscription[] = [];


  constructor(private lsnService:LessonService,private route:ActivatedRoute) {
    this.id = route.snapshot.params["id"];
   }

  ngOnInit(): void {
    var subscription =  this.lsnService.getByID(this.id).subscribe(
      (res)=>{this.lesson=res;
        let link = "https://www.youtube.com/embed/"+"k6o8H4YMwGE"+"?controls=1&fs=1&rel=0"
        this.videoUrl.nativeElement.innerHTML =`<iframe height="100%" width="100%" src=${link}>
        </iframe>`
      },
      (err)=>console.log(err)
    )
    console.log("done");

    this.subscriptions.push(subscription)
  }

  ngAfterViewInit(): void {

    }


}
