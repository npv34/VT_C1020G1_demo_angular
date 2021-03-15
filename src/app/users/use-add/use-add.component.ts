import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-use-add',
  templateUrl: './use-add.component.html',
  styleUrls: ['./use-add.component.css']
})
export class UseAddComponent implements OnInit {
  formAddUser: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      image: [''],
      phone: [''],
      address: ['']
    })
  }

  submit() {
    console.log(this.formAddUser.value)
  }

  get name() {
    return this.formAddUser.get('name');
  }

}
