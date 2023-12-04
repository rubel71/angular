import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Designation } from '../../../models/designation';
import { DataService } from '../../../services/data.service';
import { NotifyService } from '../../../services/notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-desgignation-view',
  templateUrl: './desgignation-view.component.html',
  styleUrls: ['./desgignation-view.component.css']
})
export class DesgignationViewComponent implements OnInit {
  designations: Designation[] = [];
  dataSource: MatTableDataSource<Designation> = new MatTableDataSource(this.designations);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "action"]
  constructor(
    private dataSvc: DataService,
    private dialog: MatDialog,
    private notifySvc: NotifyService
  ) { }

  ngOnInit(): void {
    this.dataSvc.getDesignation().subscribe(x => {
      this.designations = x;
      console.log(x);
      this.dataSource.data = this.designations;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  confirmDelete(item: Designation) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(r => {
      if (r) this.dataSvc.deleteDesignation(Number(item.designationId))
        .subscribe(x => {
          this.notifySvc.success("Data Deleted successfully!!", "DISMISS");
          this.dataSource.data = this.dataSource.data.filter(d => d.designationId != x.designationId);
        }, err => {
          this.notifySvc.fail("Data delete failed!!!", "DISMISS");
        });
    })
  }

}
