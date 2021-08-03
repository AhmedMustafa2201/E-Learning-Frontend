import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl,Validator, Validators}from'@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/)]),
    lastname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]{4,}$/)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required),
    phone : new FormControl ('',[Validators.required,Validators.pattern(/^([-]|[.]|[-.]|[0-9])[0-9]*[.]*[0-9]+$/)]),
  })
  constructor() { }

  ngOnInit(): void {

  }
}

