import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: any[] = [];
  searchTerm: string = '';
  filteredEmployees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data; // Initialize filtered list
    });
  }

  // Filter Employees (ES6 Arrow Function, Filter)
  filterEmployees = () => {
    this.filteredEmployees = this.employees.filter(emp => 
      emp.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  };

  // ES6 Find Example
  findEmployeeById = (id: number) => this.employees.find(emp => emp.id === id);
}
