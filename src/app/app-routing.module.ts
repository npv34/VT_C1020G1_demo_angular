import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./users/user-list/user-list.component";
import {DashboardComponent} from "./layouts/dashboard/dashboard.component";
import {UseAddComponent} from "./users/use-add/use-add.component";
import {LoginComponent} from "./layouts/login/login.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";

const appRoutes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path:'users',
        component: UserListComponent
      },
      {
        path:'users/add',
        component: UseAddComponent
      },
      {
        path:'users/:id/edit',
        component: UserEditComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
