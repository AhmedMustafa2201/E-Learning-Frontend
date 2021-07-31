import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit,AfterViewInit {

  @ViewChild("video") videoUrl:any;

  lesson:any={
    id:1,
    name:"ازاي تتعامل مع القطعة صح في عشر دقايق",
    url:"k6o8H4YMwGE"
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let link = "https://www.youtube.com/embed/"+this.lesson.url+"?controls=1&fs=1&rel=0"
    this.videoUrl.nativeElement.innerHTML =`<iframe height="100%" width="100%" src=${link}>
    </iframe>`
    }

}
