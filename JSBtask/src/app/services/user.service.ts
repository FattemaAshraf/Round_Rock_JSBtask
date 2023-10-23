import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = 'https://reqres.in/api/users?page=1';

  constructor(private _http: HttpClient) { }

  //in testymonials section
  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.baseUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data)),
      catchError(this.handleError)
    ))
  }

  private handleError(err:HttpErrorResponse)
  {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = err.error.message
    }
    else
    {
      errorMessage = `server return code ${err.status}, error message ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(()=> errorMessage);
  }


}
