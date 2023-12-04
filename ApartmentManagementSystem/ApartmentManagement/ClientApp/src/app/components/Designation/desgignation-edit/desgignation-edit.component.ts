import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Designation } from '../../../models/designation';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-desgignation-edit',
  templateUrl: './desgignation-edit.component.html',
  styleUrls: ['./desgignation-edit.component.css']
})
export class DesgignationEditComponent implements OnInit {
  desig!: Designation;
  desgiForm: FormGroup = new FormGroup({
    catagoryName: new FormControl('', Validators.required),

  });
  constructor(
    private dataSvc: DataService,
    private notifySvc: NotifyService,
    private activatedRoute: ActivatedRoute
  ) { }
  get f() {
    return this.desgiForm.controls;
  }

  update() {
    if (this.desgiForm.invalid) return;
    this.desig.designationName = this.f.designationName.value;
    this.dataSvc.putDesignation(this.desig)
      .subscribe(r => {
        this.notifySvc.success("Data Updated successfully!!", "DISMISS");

      }, err => {
        this.notifySvc.fail("Failed to update data!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.dataSvc.getDesignabyId(id)
      .subscribe(x => {
        this.desig = x;
        this.desgiForm.patchValue(this.desig);
      }, err => {
        this.notifySvc.fail("Failed to load designation data!!", "DISMISS");
      })
  }

}
