import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Catagory } from '../../../models/catagory';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-catagory-create',
  templateUrl: './catagory-create.component.html',
  styleUrls: ['./catagory-create.component.css']
})
export class CatagoryCreateComponent implements OnInit {
  catagorys: Catagory = new Catagory();
  catForm: FormGroup = new FormGroup({
    catagoryName: new FormControl('', Validators.required),
  });
  constructor(
    private datasvc: DataService,
    private notifysvc: NotifyService
  ) { }

  get f() {
    return this.catForm.controls;
  }
  insert() {
    if (this.catForm.invalid) return;
    this.catagorys.catagoryName = this.f.catagoryName.value;
    this.datasvc.postCatagory(this.catagorys)
      .subscribe(r => {
        this.notifysvc.success("Inserted Successfully", "DISMISS");
        this.catForm.reset({});
        console.log(r);
      }, err => {
        this.notifysvc.fail("Data not Saved","DISMISS")
      })
  }
  ngOnInit(): void {
  }

}
