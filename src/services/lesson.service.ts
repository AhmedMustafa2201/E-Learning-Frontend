import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private URL="https://localhost:44329/"

  constructor(private lessonClient: HttpClient) { }
  getByID(id:number){
    return this.lessonClient.get(this.URL+"api/lesson/"+id)
  }  getSome(){
    return this.lessonClient.get(this.URL+"api/lesson/lesson")
  }
  getlsnsByCrsId(id:number){
    return this.lessonClient.get(this.URL+"api/lesson/course/"+id)
  }
  getAll(){
    return this.lessonClient.get(this.URL+"api/lesson")
  }
}
