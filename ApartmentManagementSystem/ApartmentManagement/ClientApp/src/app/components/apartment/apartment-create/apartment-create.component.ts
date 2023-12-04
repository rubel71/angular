import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../../../models/apartment';
import { Catagory } from '../../../models/catagory';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.css']
})
export class ApartmentCreateComponent implements OnInit {
  apartment: Apartment = new Apartment();
  apartmentform: FormGroup = new FormGroup({
    unitNumber: new FormControl('', [Validators.required]),
    bedRooms: new FormControl('', [Validators.required]),
    bathRooms: new FormControl('', [Validators.required]),
    securityDeposit: new FormControl('', [Validators.required]),
    occupancyStatus: new FormControl('', [Validators.required]),
    aptCatagoryId: new FormControl('', [Validators.required])
  });
  catagorys: Catagory[] = [];
  get f() {
    return this.apartmentform.controls;
  }
  insert() {
    if (this.apartmentform.invalid) return;
    console.log(this.apartmentform.value);
    Object.assign(this.apartment, this.apartmentform.value);
    console.log(this.apartment);
    this.apartment.unitNumber = this.f.unitNumber.value;
    this.apartment.bedRooms = this.f.bedRooms.value;
    this.apartment.bathRooms = this.f.bathRooms.value;
    this.apartment.securityDeposit = this.f.securityDeposit.value;
    this.apartment.occupancyStatus = this.f.occupancyStatus.value;
    this.apartment.aptCatagoryId = this.f.aptCatagoryId.value;
    this.dataSvc.postApartment(this.apartment)
      .subscribe(r => {
        this.notifySvc.success("Inserted Successfully", "DISMISS");
        this.apartmentform.reset({});
        console.log(r);
      }, err => {
        this.notifySvc.fail("Data not Saved", "DISMISS")
      })
  }
  constructor(
    private dataSvc: DataService,
    private notifySvc: NotifyService,

  ) { }

  ngOnInit(): void {
    this.dataSvc.getCatagory()
      .subscribe(c => {
        this.catagorys = c;
      }, err => {
        this.notifySvc.fail("Fail to load catagory", "DISMISS");
      })
  }

}
