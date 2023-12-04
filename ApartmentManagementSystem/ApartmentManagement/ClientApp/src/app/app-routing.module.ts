import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentCreateComponent } from './components/apartment/apartment-create/apartment-create.component';
import { ApartmentViewComponent } from './components/apartment/apartment-view/apartment-view.component';
import { CatagoryCreateComponent } from './components/catagory/catagory-create/catagory-create.component';
import { CatagoryEditComponent } from './components/catagory/catagory-edit/catagory-edit.component';
import { CatagoryViewComponent } from './components/catagory/catagory-view/catagory-view.component';
import { DesgignationCreateComponent } from './components/Designation/desgignation-create/desgignation-create.component';
import { DesgignationEditComponent } from './components/Designation/desgignation-edit/desgignation-edit.component';
import { DesgignationViewComponent } from './components/Designation/desgignation-view/desgignation-view.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catagory', component: CatagoryViewComponent },
  { path: 'add-Catagory', component: CatagoryCreateComponent },
  { path: 'edit-catagory/:id', component: CatagoryEditComponent },
  { path: 'aparment', component: ApartmentViewComponent },
  { path: 'add-aprtment', component: ApartmentCreateComponent },
  { path: 'empDesignation', component: DesgignationViewComponent },
  { path: 'add-Designation', component: DesgignationCreateComponent },
  { path: 'edit-catagory', component: DesgignationEditComponent },
  { path: 'employee', component: EmployeeViewComponent },
  { path: 'add-employee', component: EmployeeCreateComponent },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
