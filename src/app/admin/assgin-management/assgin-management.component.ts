import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

export interface AssignData {
  id: number;
  product: string;
  employee: string;
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
  ],
  templateUrl: './assgin-management.component.html',
  styleUrl: './assgin-management.component.scss',
})
export class AssginManagementComponent {
  displayedColumns: string[] = [
    'id',
    'product',
    'employee',
    'status',
    'action',
  ];

  data: AssignData[] = [
    { id: 1, product: 'Laptop 01', employee: 'John Doe', status: 'Assigned' },
    { id: 2, product: 'Monitor 02', employee: 'Jane Smith', status: 'Pending' },
    {
      id: 3,
      product: 'Keyboard 03',
      employee: 'Alice Johnson',
      status: 'Assigned',
    },
    { id: 4, product: 'Mouse 04', employee: 'Bob Brown', status: 'Pending' },
  ];

  edit(element: AssignData) {
    console.log('Edit clicked for:', element);
  }
}
