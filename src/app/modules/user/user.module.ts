import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "../../users/user-list/user-list.component";
import {UseAddComponent} from "../../users/use-add/use-add.component";
import {UserEditComponent} from "../../users/user-edit/user-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../../app.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MessageModule} from "../message/message.module";
const router: Routes = [
  {
    path:'',
    component: UserListComponent
  },
  {
    path:'add',
    component: UseAddComponent
  },
  {
    path:':id/edit',
    component: UserEditComponent
  },
]

@NgModule({
  declarations: [
    UserListComponent,
    UseAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    MessageModule
  ]
})
export class UserModule { }
