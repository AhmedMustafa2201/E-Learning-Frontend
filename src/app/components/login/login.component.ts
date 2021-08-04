import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl,Validator, Validators, FormBuilder}from'@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
  });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }

}
onReset() {
  this.submitted = false;
  this.loginForm.reset();
}
}
