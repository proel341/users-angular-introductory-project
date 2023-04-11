import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './components/user/User';
import { AuthService } from './services/auth.service';
import { UsersDataService } from './services/users-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'users-angular-introductory-project';

  constructor(private usersDataService : UsersDataService, 
    private authService: AuthService){}

  list : User[] = [];
  user: User | null = null;
  newUser: User | null = null;
  updatedUser: User | null = null;

  tokenReg: {id: number, token: string} | null = null;
  token: string = '';

  ngOnInit(){
    //this.usersDataService.getUsersByPage(1).subscribe({next:(data: User[]) => this.list=data});
    //this.usersDataService.getUserById(5).subscribe((user : User) => this.user = user);
    //this.usersDataService.postCreateUser('morpheus', 'leader').subscribe((user : User) => this.newUser = user);
    //this.usersDataService.deleteUser(1).subscribe((user : User) => this.updatedUser = user);

    //this.authService.postRegistration('eve.holt@reqres.in', 'pistol').subscribe((key: any) => this.tokenReg = key);
    //this.authService.postAuthorization('eve.holt@reqres.in', 'pistol').subscribe((key: string) => this.token = key)

    // setTimeout(()=>{
    //   console.log(this.list);  
    //   console.log(this.user);
    //   console.log(this.newUser);
      
    //   console.log(this.token);
      
    // }, 3000);
    // setTimeout(() => {
    //   console.log(this.updatedUser);

    // }, 8000)
  }
}
