import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserListComponent } from './users/user-list/user-list.component';
import { UseAddComponent } from './users/use-add/use-add.component';
import { InputSerachComponent } from './core/input-serach/input-serach.component';
import { MessageComponent } from './core/message/message.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserListComponent,
    UseAddComponent,
    InputSerachComponent,
    MessageComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
