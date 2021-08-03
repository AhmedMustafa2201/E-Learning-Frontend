import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerfrm: FormGroup;
  constructor(private fb2: FormBuilder) { }

  ngOnInit(): void {
    this.registerfrm = this.fb2.group({
      FirstName: ['', [Validators.required  , Validators.minLength(10)]]
      , LastName: ['' , [Validators.required , Validators.minLength(10)]]
      , Email: ['' , [Validators.required , Validators.email]]
      , Phone: ['' , [Validators.required]]
      , Password: ['' , [Validators.required]]
    });
  }

}
