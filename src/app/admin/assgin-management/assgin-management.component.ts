import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface AssignData {
  assetName: string;
  employeeName: string;
  assignDate: Date;
  status: string;
}

@Component({
  selector: 'app-assgin-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    RouterLink,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './assgin-management.component.html',
  styleUrls: ['./assgin-management.component.scss'],
})
export class AssginManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'assetName',
    'employeeName',
    'assignDate',
    'status',
    'action',
  ];

  data: AssignData[] = [
    { assetName: 'Laptop', employeeName: 'John Doe', assignDate: new Date('2026-01-10'), status: 'Active' },
    { assetName: 'Mobile', employeeName: 'Jane Smith', assignDate: new Date('2026-01-12'), status: 'Returned' },
    { assetName: 'Office Chair', employeeName: 'Mike Johnson', assignDate: new Date('2026-01-08'), status: 'Active' },
    { assetName: 'Keyboard', employeeName: '', assignDate: new Date('2026-01-05'), status: 'Pending' },
    { assetName: 'Monitor', employeeName: 'Alice Brown', assignDate: new Date('2026-01-15'), status: 'Active' },
  ];

  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<AssignData>(this.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  edit(element: AssignData) {
    console.log('Edit clicked for:', element);
  }
}
