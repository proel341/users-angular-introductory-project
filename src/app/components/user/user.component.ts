import { Component, Input, OnInit } from '@angular/core';

import {User} from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  user? : User;
  defaultuser : User = {
    id: 1,
    email: 'email@email.com',
    first_name: 'Не задано',
    last_name: 'Не задано',
    avatar: 'Увы',
  }

  ngOnInit(){
    this.user = (!this.user) ? this.defaultuser : this.user
  }

  @Input() set setUser(user : User | null){
    if (user) this.user = user; 
  }
}
