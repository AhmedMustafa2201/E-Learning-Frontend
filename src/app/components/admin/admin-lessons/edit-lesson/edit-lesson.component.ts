import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/Models/lesson';
import { LessonService } from 'src/services/lesson.service';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  lsn:Lesson;
  constructor(
    private lsnService:LessonService
    ,private ActiveLink:ActivatedRoute
    ,private router:Router
    ) { }

  ngOnInit(): void {
    this.lsnService.getByID(this.ActiveLink.snapshot.params.id).subscribe(
      resp=>this.lsn=resp as Lesson,
      err=>console.log(err)
    )
  }

}
