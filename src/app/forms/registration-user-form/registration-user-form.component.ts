import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-registration-user-form',
  templateUrl: './registration-user-form.component.html',
  styleUrls: ['./registration-user-form.component.scss']
})
export class RegistrationUsefFormComponent{
  myForm : FormGroup;
  
  constructor(private authService: AuthService, private router: Router){
    this.myForm = new FormGroup({
      "userEmail": new FormControl(),
      "userPassword": new FormControl(),
  });
  }

  submit(){
    this.authService.postRegistration(this.myForm.controls['userEmail'].value, this.myForm.controls['userPassword'].value)
      .subscribe((info: any) => {
        console.log(info.token);
        
        this.authService.login();
        this.router.navigate(['home']);
        
      });
  }
}
