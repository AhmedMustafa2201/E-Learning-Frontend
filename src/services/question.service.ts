import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private myClient: HttpClient) { }
  private URL="http://localhost:3000/questions"

  getAll(){
    return this.myClient.get(this.URL)
  }

  getAllWithLimited(){
    return this.myClient.get(this.URL+"?_limit=4")
  }

  getByID(id:number){
    return this.myClient.get(this.URL+"/"+id)
  }

  add(question:any){
    return this.myClient.post(this.URL,question)
  }

  update(id:number, question:any){
    return this.myClient.put(this.URL+"/"+id,question)
  }

}
