import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-departments-info',
  templateUrl: './departments-info.component.html',
  styleUrls: ['./departments-info.component.css']
})
export class DepartmentsInfoComponent implements OnInit {

  Departments:any;
  newDep:any;

  constructor(
    private EmployeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }


  getDepartments(): void {
    this.EmployeesService.getDepartmenst().subscribe(dept => {
      this.Departments = dept;
    });
  }

  department = new FormGroup({
    id:new FormControl(''),
    name:new FormControl('')
  })


  OnSubmit() {
    this.newDep = this.department.value;
      this.EmployeesService.AddDep(this.newDep).subscribe();
  }
}
