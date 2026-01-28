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

export interface EmployeeData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-employee-management',
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
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];

  data: EmployeeData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Employee', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Employee', status: 'Active' },
    { id: 5, name: 'Bob Williams', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  ];

  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<EmployeeData>(this.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  edit(element: EmployeeData) {
    console.log('Edit clicked for:', element);
  }
}
