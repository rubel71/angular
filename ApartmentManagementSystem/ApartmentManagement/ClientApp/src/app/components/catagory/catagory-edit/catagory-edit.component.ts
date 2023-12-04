import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Catagory } from '../../../models/catagory';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-catagory-edit',
  templateUrl: './catagory-edit.component.html',
  styleUrls: ['./catagory-edit.component.css']
})
export class CatagoryEditComponent implements OnInit {

  catg!: Catagory;
  catForm: FormGroup = new FormGroup({
    catagoryName: new FormControl('', Validators.required),
    
  });
  constructor(
    private dataSvc: DataService,
    private notifySvc: NotifyService,
    private activatedRoute: ActivatedRoute) { }
  get f() {
    return this.catForm.controls;
  }
  update() {
    if (this.catForm.invalid) return;
    this.catg.catagoryName = this.f.catagoryName.value;
    this.dataSvc.putCatagory(this.catg)
      .subscribe(r => {
        this.notifySvc.success("Data Updated successfully!!", "DISMISS");

      }, err => {
        this.notifySvc.fail("Failed to update data!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.dataSvc.getCatagorybyId(id)
      .subscribe(x => {
        this.catg = x;
        this.catForm.patchValue(this.catg);
      }, err => {
        this.notifySvc.fail("Failed to load zoo data!!", "DISMISS");
      })
  }


}
