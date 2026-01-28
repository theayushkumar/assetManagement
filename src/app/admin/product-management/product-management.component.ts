import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
export interface ProductData {
  productName: string;
  productCategory: string;
  productPrice: number;
  manufactureDate: Date;
  assignedTo?: string;
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
    MatPaginatorModule,
    MatSortModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'productName',
    'productCategory',
    'productPrice',
    'manufactureDate',
    'assignedTo',
    'action',
  ];

  data: ProductData[] = [
    {
      productName: 'Laptop',
      productCategory: 'Electronics',
      productPrice: 50000,
      manufactureDate: new Date('2025-12-01'),
      assignedTo: 'John Doe',
    },
    {
      productName: 'Mobile Phone',
      productCategory: 'Electronics',
      productPrice: 20000,
      manufactureDate: new Date('2025-11-15'),
    },
    {
      productName: 'Office Chair',
      productCategory: 'Furniture',
      productPrice: 5000,
      manufactureDate: new Date('2025-10-20'),
      assignedTo: 'Jane Smith',
    },
    {
      productName: 'Notebook',
      productCategory: 'Stationery',
      productPrice: 50,
      manufactureDate: new Date('2025-09-10'),
    },
    {
      productName: 'Laptop',
      productCategory: 'Electronics',
      productPrice: 50000,
      manufactureDate: new Date('2025-12-01'),
      assignedTo: 'John Doe',
    },
    {
      productName: 'Mobile Phone',
      productCategory: 'Electronics',
      productPrice: 20000,
      manufactureDate: new Date('2025-11-15'),
    },
    {
      productName: 'Office Chair',
      productCategory: 'Furniture',
      productPrice: 5000,
      manufactureDate: new Date('2025-10-20'),
      assignedTo: 'Jane Smith',
    },
    {
      productName: 'Notebook',
      productCategory: 'Stationery',
      productPrice: 50,
      manufactureDate: new Date('2025-09-10'),
    },
  ];

  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ProductData>(this.data);

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  edit(element: ProductData) {
    console.log('Edit clicked for:', element);
  }
}
