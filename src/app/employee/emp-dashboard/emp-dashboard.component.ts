import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-dashboard',
  imports: [
    MatCardModule, RouterLink,
  ],
  templateUrl: './emp-dashboard.component.html',
  styleUrl: './emp-dashboard.component.scss'
})
export class EmpDashboardComponent {

}
