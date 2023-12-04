import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from '../../../models/designation';
import { Employee } from '../../../models/employee';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  picFile!: File;
  employees: Employee = new Employee();
  empForm: FormGroup = new FormGroup({
    empName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    gender: new FormControl('Male', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    picture: new FormControl(undefined, [Validators.required]),
    joinDate: new FormControl(undefined, [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    designationId: new FormControl('', Validators.required)
  });
  designations: Designation[] = [];
  get f() {
    return this.empForm.controls;
  }
  onChange(event: any) {
    this.picFile = event.target.files[0];
  }
  insert(): void {
    if (this.empForm.invalid) return;
    console.log(this.empForm.value);
    Object.assign(this.employees, this.empForm.value);
    console.log(this.employees);
    this.employees.picture = 'pic.png';
    this.employees.empName = this.f.empName.value;
    this.employees.gender = this.f.gender.value;
    this.employees.address = this.f.address.value;
    this.employees.contact = this.f.contact.value;
    this.employees.picture = this.f.picture.value;
    this.employees.joinDate = this.f.joinDate.value;
    this.employees.joinDate = new Date(<string>this.datePipe.transform(this.employees.joinDate, "yyyy-MM-dd"));
    this.employees.salary = this.f.salary.value;
    this.employees.designationId = this.f.designationId.value;
    this.dataSvc.postEmployee(this.employees)
      .subscribe(a => {
        this.upload(Number(a.employeeId));
      }, err => {
        this.notifySvc.fail("Data not saved ", "DISMISS");
      })
  }
  upload(id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      this.dataSvc.upload(id, this.picFile)
        .subscribe(r => {
          this.employees.picture = r.imagePath;
          this.notifySvc.success("Saved Successfully", "DISMISS");
          this.empForm.reset({});
        }, err => {
          this.notifySvc.fail("Data not saved", "DISMISS");
        })
    })
    reader.readAsDataURL(this.picFile);
  }
  constructor(
    private dataSvc: DataService,
    private notifySvc: NotifyService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.dataSvc.getDesignation()
      .subscribe(c => {
        this.designations = c;
      }, err => {
        this.notifySvc.fail("Fail to load designation", "DISMISS");
      })
  }

}
