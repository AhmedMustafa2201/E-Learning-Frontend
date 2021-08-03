import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl,Validator, Validators, FormBuilder}from'@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
    title: ['', Validators.required],
    FirstName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/)]],
    LastName: ['',[ Validators.required,Validators.pattern(/^[a-zA-Z]{4,}$/)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    PhoneNumber:['',[Validators.required,Validators.pattern(/^([-]|[.]|[-.]|[0-9])[0-9]*[.]*[0-9]+$/)]]
}, {
    validator: this.MustMatch('Password', 'confirmPassword')
});
}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
  MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
}

