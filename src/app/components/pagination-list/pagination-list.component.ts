import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { User } from '../user/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit {

  public users: User[] = [];
  currentPage: number = 1;

  total_pages: number = 1;
  pages: number[] = [];

  data: any = null;

  constructor(private usersDataService : UsersDataService, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.updatePage(1);
  }

  identify(id: number, user: User) : number{
    return user.id;
  }

  updatePage(page: number){
    this.usersDataService.getTotalPage().subscribe({next: (n: number) => this.total_pages = n});
    this.usersDataService.getUsersByPage(page).subscribe({next: (users: User[]) => this.users = users})
  }

  del(id: number){
    this.users = this.users.filter((user) => {
      return user.id != id;
    });
    this.usersDataService.deleteUser(id);
  }

  nextPage(){
    if (this.currentPage < this.total_pages){
      this.currentPage++;
      this.updatePage(this.currentPage);
    }


    // for(let i = 0; i < Infinity; i++){
    //   Promise.resolve('promise').then((res) => {console.log(res);
    //   })
    //   setTimeout(() => {console.log('timeout');
    //   console.log(i);
    //   })
    // }
    
  }

  previousPage(){
    if (this.currentPage > 1){
      this.currentPage--;
      this.updatePage(this.currentPage);
    }
  }

  exit(){
    this.auth.exit();
    this.router.navigate(['']);
  }

  userClick(user: User){
    this.router.navigate(['/profile', user.id]);
  }


  jsonToUser(json : any) : User{
    return this.invoke(json,
      (obj : any) => ({
        id: obj.id,
        first_name: obj.first_name ?? undefined,
        last_name: obj.last_name ?? undefined,
        email: obj.email ?? undefined,
        avatar: obj.avatar ?? undefined,
        job: obj.job ?? undefined,
        createdAt: obj.createdAt ?? undefined
      } as User))
  }

  invoke(x : any, method : (x :any) => any): any{
    return(method(x))
  }
}
