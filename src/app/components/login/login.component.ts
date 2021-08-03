import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrm: FormGroup;
  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.loginfrm = this.fb.group({
      Email: ['', [Validators.required , Validators.email , Validators.minLength(10)]]
      , Password: ['' , [Validators.required , Validators.minLength(10)]]
    });
  }

}
