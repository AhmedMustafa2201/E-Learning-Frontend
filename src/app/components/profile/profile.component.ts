import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private athservice: AuthService) { }

  currentPassword:string
  newPassword:string
  ngOnInit(): void {

  }

  updatePassword(){
    let user:any={
      userId: localStorage.getItem("rnid"),
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    }
    this.athservice.changePassword(user).subscribe(
      res=>{
        alert("تم التعديل بنجاح")
      },
      err=>alert(err.error)
    )
  }

}
