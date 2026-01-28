import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface ReportData {
  reportName: string;
  reportCategory: string;
  createdBy: string;
  createdDate: Date;
  description: string;
  status: boolean; // true = active, false = inactive
}

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    // RouterLink,
  ],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'reportName',
    'reportCategory',
    'createdBy',
    'createdDate',
    'description',
    'status',
    'action',
  ];

  data: ReportData[] = [
    {
      reportName: 'Sales Report Jan',
      reportCategory: 'Sales',
      createdBy: 'John Doe',
      createdDate: new Date('2026-01-01T10:00:00'),
      description: 'Monthly sales report for January',
      status: true,
    },
    {
      reportName: 'Inventory Report',
      reportCategory: 'Inventory',
      createdBy: 'Jane Smith',
      createdDate: new Date('2026-01-05T15:30:00'),
      description: 'Weekly inventory status',
      status: false,
    },
    {
      reportName: 'Employee Performance',
      reportCategory: 'HR',
      createdBy: 'Alice Johnson',
      createdDate: new Date('2026-01-10T09:20:00'),
      description: 'Employee monthly performance report',
      status: true,
    },
    {
      reportName: 'Expense Report',
      reportCategory: 'Finance',
      createdBy: 'Bob Brown',
      createdDate: new Date('2026-01-12T11:15:00'),
      description: 'Monthly expenses breakdown',
      status: false,
    },
  ];

  dataSource = new MatTableDataSource<ReportData>(this.data);

  statuses: string[] = ['Active', 'Inactive'];
  categories: string[] = ['Sales', 'Inventory', 'HR', 'Finance'];
  selectedStatus: string = '';
  selectedCategory: string = '';
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilters() {
    this.dataSource.filterPredicate = (data: ReportData, filter: string) => {
      const searchTerms = JSON.parse(filter);

      // Filter by status
      const statusMatch =
        !searchTerms.status ||
        (searchTerms.status === 'Active' && data.status) ||
        (searchTerms.status === 'Inactive' && !data.status);

      // Filter by category
      const categoryMatch =
        !searchTerms.category ||
        data.reportCategory.toLowerCase() ===
          searchTerms.category.toLowerCase();

      // Filter by search text
      const searchTextMatch =
        !searchTerms.searchText ||
        data.reportName.toLowerCase().includes(searchTerms.searchText.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerms.searchText.toLowerCase()) ||
        data.createdBy.toLowerCase().includes(searchTerms.searchText.toLowerCase());

      return statusMatch && categoryMatch && searchTextMatch;
    };

    const filter = {
      status: this.selectedStatus,
      category: this.selectedCategory,
      searchText: this.searchText,
    };

    this.dataSource.filter = JSON.stringify(filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(element: ReportData) {
    console.log('Edit clicked for:', element);
  }
}
