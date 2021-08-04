import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client:HttpClient) { }

  private URL="https://localhost:44329/api/";

  Register(user){
    return this.client.post(this.URL+"Auth/register",user)
  }
}
