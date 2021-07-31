import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private myClient: HttpClient) { }

  private URL="https://localhost:44329/"


  getByID(id:number){
    return this.myClient.get(this.URL+"api/exam/"+id)
  }


}
