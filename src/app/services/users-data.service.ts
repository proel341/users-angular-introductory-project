import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../components/user/User';

@Injectable()
export class UsersDataService {

  errorMessage: string = "";

  constructor(private http: HttpClient) { }

  getUsersByPage(page : number) : Observable<User[]> {
    return this.http.get('https://reqres.in/api/users', {
      params: new HttpParams().set('page', page)}
    )
      .pipe(
        map((data:any)=>{
          return data["data"].map((user: any) => this.jsonToUser(user));
        }),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
  }

  getTotalPage() : Observable<number> {
    return this.http.get('https://reqres.in/api/users', {
      params: new HttpParams().set('page', 1)}
    )
      .pipe(
        map((data:any)=>{
          return data["total_pages"];
        }),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
  }

  getUserById(id : number) : Observable<User>{
    return this.http.get('https://reqres.in/api/users/' + id)
      .pipe(
        map((data:any)=>{
          return this.jsonToUser(data["data"])}),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
  }

  postCreateUser(name : string, job : string) : Observable<User>{
    const body = {first_name: name, job: job};
    return this.http.post('https://reqres.in/api/users', body)
      .pipe(
        map((data:any)=>{
          return this.jsonToUser(data)}),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
        }));
  }

  putUpdateUser(id: number, name : string, job : string) : Observable<User>{
    const body = {first_name: name, job: job};
    return this.http.put('https://reqres.in/api/users/' + id, body)
      .pipe(
        map((data:any)=>{
          return this.jsonToUser(data)}),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
  }

  patchUpdateUser(id: number, name : string, job : string) : Observable<User>{
    const body = {first_name: name, job: job};
    return this.http.patch('https://reqres.in/api/users/' + id, body)
      .pipe(
        map((data:any)=>{
          return this.jsonToUser(data)}),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
  }

  deleteUser(id: number) : Observable<User>{
    return this.http.delete('https://reqres.in/api/users/' + id)
      .pipe(
        map((data:any) => data),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
      }));
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
