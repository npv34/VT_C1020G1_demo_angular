import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  message: string;
  users: IUser[];
  userFilter: IUser[] = []

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getListUser();
    this.userFilter = this.users;
  }

  getListUser() {
    this.users = this.userService.getAll();
  }

  delete(index: number) {
    if (confirm('Are you sure?')) {
      this.userService.delete(index);
      this.getListUser();
      this.message = 'Delete success';
    }
  }

  search(value) {
    this.userFilter = (value) ? this.userService.filterUser(value) : this.users;
  }

}
