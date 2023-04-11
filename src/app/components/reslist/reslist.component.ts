import { Component } from '@angular/core';
import { Recource } from '../resource/Recource';
import { Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-reslist',
  templateUrl: './reslist.component.html',
  styleUrls: ['./reslist.component.scss']
})
export class ReslistComponent {
  public resourses: Recource[] = [];
  currentPage: number = 1;

  total_pages: number = 1;
  pages: number[] = [];

  data: any = null;

  constructor(private usersDataService : UsersDataService, private router: Router){}

  ngOnInit(): void {
    this.updatePage(1);
  }

  identify(id: number, res: Recource) : number{
    return res.id;
  }

  updatePage(page: number){
    this.usersDataService.getTotalRPage().subscribe({next: (n: number) => this.total_pages = n});
    this.usersDataService.getResByPage(page).subscribe({next: (res: Recource[]) => this.resourses = res})
  }

  del(id: number){
    this.resourses = this.resourses.filter((res) => {
      return res.id != id;
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

  userClick(user: Recource){
    this.router.navigate(['/profile', user.id]);
  }

  invoke(x : any, method : (x :any) => any): any{
    return(method(x))
  }
}
