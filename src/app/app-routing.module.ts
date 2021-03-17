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
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      }
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
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
