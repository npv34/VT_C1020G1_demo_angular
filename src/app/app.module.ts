import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputSerachComponent } from './core/input-serach/input-serach.component';
import { MessageComponent } from './core/message/message.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {UserModule} from "./modules/user/user.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputSerachComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
