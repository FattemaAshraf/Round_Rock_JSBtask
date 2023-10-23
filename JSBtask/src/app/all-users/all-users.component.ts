import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  errorMessage: any;


  constructor(public _http: HttpClient, private userService: UserService) {}

  //get all service data
  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.data;
    });
  }
}
