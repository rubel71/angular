import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from '../../../models/designation';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-desgignation-create',
  templateUrl: './desgignation-create.component.html',
  styleUrls: ['./desgignation-create.component.css']
})
export class DesgignationCreateComponent implements OnInit {
  designation: Designation = new Designation();
  desgForm: FormGroup = new FormGroup({
    designationName: new FormControl('', Validators.required),
  });
  constructor(
    private datasvc: DataService,
    private notifysvc: NotifyService
  ) { }
  get f() {
    return this.desgForm.controls;
  }

  insert() {
    if (this.desgForm.invalid) return;
    this.designation.designationName = this.f.designationName.value;
    this.datasvc.postDesignation(this.designation)
      .subscribe(r => {
        this.notifysvc.success("Inserted Successfully", "DISMISS");
        this.desgForm.reset({});
        console.log(r);
      }, err => {
        this.notifysvc.fail("Data not Saved", "DISMISS")
      })
  }
  ngOnInit(): void {
  }

}
