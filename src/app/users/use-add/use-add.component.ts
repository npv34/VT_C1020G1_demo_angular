import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-use-add',
  templateUrl: './use-add.component.html',
  styleUrls: ['./use-add.component.css']
})
export class UseAddComponent implements OnInit {
  formAddUser: FormGroup
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      img: [''],
      phone: [''],
      address: ['']
    })
  }

  submit() {
    let data = this.formAddUser.value;
    this.userService.add(data);
    this.router.navigate(['admin/users'])

  }

  get name() {
    return this.formAddUser.get('name');
  }

}
