import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl:string = 'http://upskilling-egypt.com:3000/contact';

  constructor(private _http: HttpClient) { }

    //in contact section

  // createUser(user: User) {
  //   return this._http.post(this.baseUrl,user).
  //       pipe(
  //          map((data: any) => {
  //            return data;
  //          }), catchError( error => {
  //            return throwError( 'Something went wrong!' );
  //          })
  //       )
  //  }
  addContact(addContact: Contact):Observable<Contact> {
    return this._http.post<Contact>(this.baseUrl,addContact);
  }
}
