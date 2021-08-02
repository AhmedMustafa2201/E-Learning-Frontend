import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  private URL="https://localhost:44329/api/";


  getByID(id:number){
    return this.http.get(this.URL+"article/"+id)
  }
}
