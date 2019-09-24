import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticateComponent } from "../app/authenticate/authenticate.component";
import { EditPageComponent } from "../app/edit-page/edit-page.component";
import { UploadFileComponent } from "../app/upload-file/upload-file.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "authentication", component: AuthenticateComponent },
  { path: "edit", component: EditPageComponent },
  { path: "insert", component: UploadFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
