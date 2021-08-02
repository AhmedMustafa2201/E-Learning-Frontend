import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private myClient: HttpClient) { }
  private URL="https://localhost:44329/api/Post"

  getAll(){
    return this.myClient.get(this.URL)
  }

  getAllWithLimited(){
    return this.myClient.get(this.URL+"/limited")
  }

  getByID(id:number){
    return this.myClient.get(this.URL+"/"+id)
  }

  add(question:any){
    return this.myClient.post(this.URL, question)
  }

  updateLike(id:number, question:any){
    debugger
    return this.myClient.post(this.URL+"/like/"+id,question)
  }

  updateDisLike(id:number, question:any){
    return this.myClient.post(this.URL+"/dislike/"+id,question)
  }

  updateViewCount(id:number,question){
    return this.myClient.patch(this.URL+"/"+id,question)
  }
}
