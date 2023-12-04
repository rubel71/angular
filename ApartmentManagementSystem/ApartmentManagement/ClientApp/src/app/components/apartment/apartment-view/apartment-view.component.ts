import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { Apartment } from '../../../models/apartment';
import { Catagory } from '../../../models/catagory';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-apartment-view',
  templateUrl: './apartment-view.component.html',
  styleUrls: ['./apartment-view.component.css']
})
export class ApartmentViewComponent implements OnInit {
  apartments: Apartment[] = [];
  catagory: Catagory[] = [];
  dataSource: MatTableDataSource<Apartment> = new MatTableDataSource(this.apartments);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["unitNumber", "bedRooms", "bathRooms", "securityDeposit","occupancyStatus","catagory","action"]
  constructor(

    private dataSvc: DataService,
    private dialog: MatDialog,
    private notifySvc: NotifyService

  ) { }
  getCatName(id: number) {
    let z = this.catagory.find(z => z.aptCatagoryId == id);
    return z ? z.catagoryName : '';
  }
  ngOnInit(): void {
    this.dataSvc.getApartment()
      .subscribe(r => {
        this.apartments = r;
        this.dataSource.data = this.apartments;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {

      });
    this.dataSvc.getCatagory().
      subscribe(x => {
        this.catagory = x;
      }, err => {

      });
  }

}
