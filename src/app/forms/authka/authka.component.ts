import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authka',
  templateUrl: './authka.component.html',
  styleUrls: ['./authka.component.scss']
})
export class AuthkaComponent {
  myForm : FormGroup;
  
  constructor(private authService: AuthService, private router: Router){
    this.myForm = new FormGroup({
      "userEmail": new FormControl("", [
        Validators.required, 
        Validators.email 
    ]),
      "userPassword": new FormControl("", [
        Validators.required,
        ]),
  });
  }

  submit(){
    this.authService.postAuthorization(this.myForm.controls['userEmail'].value, this.myForm.controls['userPassword'].value)
      .subscribe((info: any) => {
        console.log(info.token);
        this.authService.login();
        this.router.navigate(['home']);
      });
  }
}
