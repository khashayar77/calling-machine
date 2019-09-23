import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from '../app/authenticate/authenticate.component';
import { EditPageComponent } from '../app/edit-page/edit-page.component';
import { UploadFileComponent } from '../app/upload-file/upload-file.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  { path: 'authentication' , component: AuthenticateComponent},
  { path: 'edit' , component: EditPageComponent},
  { path: 'insert' , component: UploadFileComponent },
  { path: 'department' , component: DepartmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
