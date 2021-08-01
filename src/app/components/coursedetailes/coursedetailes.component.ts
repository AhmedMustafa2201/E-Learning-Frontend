import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoursedetailesService } from './../../../services/coursedetailes.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { Lesson } from 'src/app/Models/lesson';

@Component({
  selector: 'app-coursedetailes',
  templateUrl: './coursedetailes.component.html',
  styleUrls: ['./coursedetailes.component.css']
})
export class CoursedetailesComponent implements OnInit,OnDestroy {

  course:Course;
  Description:string="";
  Content:Lesson[]=[];
  Title:string="";
  Auther:string="";
  err:string="";
  sub!:Subscription;

  constructor(private CourseService:CoursedetailesService, private route:ActivatedRoute ) { }


  ngOnInit(): void {
    this.sub=this.CourseService.getByID(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: res=>{
        this.course=res as Course;
        this.Description=this.course.description;
        this.Title=this.course.name;
        this.Content=this.course.lessons;
      },
      error: err=>this.err=err
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
