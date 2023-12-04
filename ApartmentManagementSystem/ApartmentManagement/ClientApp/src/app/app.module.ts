import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './modules/mat/mat.module';
import { NavComponent } from './components/nav/nav.component';
import { ApartmentViewComponent } from './components/apartment/apartment-view/apartment-view.component';
import { ApartmentCreateComponent } from './components/apartment/apartment-create/apartment-create.component';
import { ApartmentEditComponent } from './components/apartment/apartment-edit/apartment-edit.component';
import { HomeComponent } from './components/home/home.component';
import { CatagoryViewComponent } from './components/catagory/catagory-view/catagory-view.component';
import { CatagoryCreateComponent } from './components/catagory/catagory-create/catagory-create.component';
import { CatagoryEditComponent } from './components/catagory/catagory-edit/catagory-edit.component';
import { DataService } from './services/data.service';
import { NotifyService } from './services/notify.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DatePipe } from '@angular/common';

import { DesgignationViewComponent } from './components/Designation/desgignation-view/desgignation-view.component';
import { DesgignationCreateComponent } from './components/Designation/desgignation-create/desgignation-create.component';
import { DesgignationEditComponent } from './components/Designation/desgignation-edit/desgignation-edit.component';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ApartmentViewComponent,
    ApartmentCreateComponent,
    ApartmentEditComponent,
    HomeComponent,
    CatagoryViewComponent,
    CatagoryCreateComponent,
    CatagoryEditComponent,
    ConfirmDialogComponent,
    
    DesgignationViewComponent,
    DesgignationCreateComponent,
    DesgignationEditComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [DataService, NotifyService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
