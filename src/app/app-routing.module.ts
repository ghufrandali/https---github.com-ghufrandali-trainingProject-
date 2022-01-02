import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsInfoComponent } from './departments-info/departments-info.component';
import { EmplyeesInfoComponent } from './emplyees-info/emplyees-info.component';
import { FormComponent } from './form/form.component';
import { ProjectsInfoComponent } from './projects-info/projects-info.component';

const routes: Routes = [
  {path:'', redirectTo:'/EmployeesInfo' ,pathMatch: 'full'},
  {path:'EmployeesInfo' , component:EmplyeesInfoComponent},
  {path:'DepartmentsInfo', component:DepartmentsInfoComponent},
  {path:'ProjectsInfo',component:ProjectsInfoComponent},
  {path:'Form/:id', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
