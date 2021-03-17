import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  formEditUser: FormGroup

  constructor(private router: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit(): void {
    let id = +this.router.snapshot.paramMap.get('id');
    let user = this.userService.getUserByIndex(id);
    this.formEditUser = this.fb.group({
      name: [user.name, [Validators.required]],
      phone: [user.phone],
      address: [user.address],
      img: [user.img],
      id: [id]
    })
  }

  get name() {
    return this.formEditUser.get('name');
  }

  edit() {
    let newData = this.formEditUser.value;
    this.userService.update(newData);
    this.route.navigate(['admin/users'])
  }
}
