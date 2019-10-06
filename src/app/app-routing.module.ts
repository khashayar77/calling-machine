import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateComponent } from '../app/authenticate/authenticate.component';
import { UploadFileComponent } from '../app/upload-file/upload-file.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { LogedInGuard } from './guards/loged-in.guard';
import { DashabaordComponent } from './dashabaord/dashabaord.component';
import { LayoutComponent } from './layout/layout.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: AuthenticateComponent
  },
	{
    path: '',
		component: LayoutComponent,
    canActivate: [ LogedInGuard ],
    children: [
      {
        path: 'dashboard',
        component: DashabaordComponent
      },
      {
        path: 'insert',
        component: UploadFileComponent
      },
      {
        path: 'department',
        component: DepartmentsComponent
      },
      {
        path: 'department/:id/edit',
        component: DepartmentDetailComponent
      },
      {
        path: 'department/:id/Add',
        component: AddComponent
      }
    ]
	},
  { path: '**', redirectTo: '/404' },

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
