import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage : string = '';

  constructor(private http: HttpClient) { }

  postRegistration(email : string, password : string) : Observable<{id: number, token: string}>{
    let body : any = {email: email, password: password};
    return this.http.post('https://reqres.in/api/register', body)
      .pipe(
        map((data: any) => this.invoke(data, (x: any) => {return {id: x.id ,token: x.token}})),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
        }));
  }

  postAuthorization(email : string, password : string) : Observable<string>{
    let body : any = {email: email, password: password};
    return this.http.post('https://reqres.in/api/register', body)
      .pipe(
        map((data: any) => this.invoke(data, (x: any) => {return x.token})),
        catchError(err => {  
          console.log(err); 
          this.errorMessage = err.message;
          return [];
        }));
  }

  invoke(prop: any, operation: (value: any) => any) : any{
    return operation(prop);
  }
}

