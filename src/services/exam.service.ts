import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private myClient: HttpClient) { }

  private URL="https://localhost:44329/api/"


  getByID(id:number){
    return this.myClient.get(this.URL+"exam/"+id)
  }

  getAllTopics(){
    return this.myClient.get(this.URL+"Topic")
  }

  getAllQuestionsForExam(){
    return this.myClient.get(this.URL+"exam/allQuestions")
  }

}
