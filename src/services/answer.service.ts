import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {


  constructor(private myClient: HttpClient) { }
  private URL="http://localhost:3000/answers"

  getAllByQuestion(id:number){
    return this.myClient.get(`${this.URL}?questionID=${id}`)
  }

  add(answer:any){
    return this.myClient.post(this.URL,answer)
  }

  update(id:number, answer:any){
    return this.myClient.put(this.URL+"/"+id,answer)
  }

}
