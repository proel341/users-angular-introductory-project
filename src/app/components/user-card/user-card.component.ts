import { Component } from '@angular/core';
import { User } from '../user/User';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  flag: boolean = true;

  user: User | null = null;

  first_name: string = '';
  job: string = '';

  constructor(private route: ActivatedRoute, private usersDataService: UsersDataService, private router: Router){}

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
        .subscribe(data=> this.usersDataService.getUserById(+data).subscribe(
          ((user) => this.user = user)
        ));
      }

      change(){
        this.flag = false;
      }

      cancel(){
        this.flag = true;
      }

      save(){
        console.log(this.first_name);
        console.log(this.job);
        
        this.usersDataService.putUpdateUser(this.user?.id ?? 0, this.first_name, this.job).subscribe((u: User) => {
          if(this.user){
            this.user.first_name = u.first_name;
            this.user.job = u.job;
            this.user.createdAt = u.createdAt;
            this.flag = true;
            console.log(u);
            
          }
        })
      }

      home(){
        this.router.navigate(['']);
      }
}
