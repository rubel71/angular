import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Catagory } from '../../../models/catagory';
import { DataService } from '../../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../../services/notify.service';


@Component({
  selector: 'app-catagory-view',
  templateUrl: './catagory-view.component.html',
  styleUrls: ['./catagory-view.component.css']
})
export class CatagoryViewComponent implements OnInit {
  catagories: Catagory[] = [];
  dataSource: MatTableDataSource<Catagory> = new _MatTableDataSource(this.catagories);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[]=["name","action"]
  constructor(

    private dataSvc: DataService,  
    private dialog: MatDialog,
    private notifySvc: NotifyService

  ) { }

  ngOnInit(): void {
    this.dataSvc.getCatagory().subscribe(x => {
      this.catagories = x;
      console.log(x);
      this.dataSource.data = this.catagories;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  confirmDelete(item: Catagory) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(r => {
      if (r) this.dataSvc.deleteCatagory(Number(item.aptCatagoryId))
        .subscribe(x => {
          this.notifySvc.success("Data Deleted successfully!!", "DISMISS");
          this.dataSource.data = this.dataSource.data.filter(d => d.aptCatagoryId != x.aptCatagoryId);
        }, err => {
          this.notifySvc.fail("Data delete failed!!!", "DISMISS");
        });
    })
  }

}
