import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-emplyees-info',
  templateUrl: './emplyees-info.component.html',
  styleUrls: ['./emplyees-info.component.css']
})
export class EmplyeesInfoComponent implements OnInit {

  constructor(private employeeService: EmployeesService) { }


  public employees: any[] = []
  detailShownSearch: boolean[] = [];
  color = "red";
  numberOfEmployees = 0;

  ngOnInit(): void {
    this.getEmployees();
  }



  pageNo = 0;
  pageSize = 1;
  Length:number;
  page:any;
  pageSizeOptions: number[] = [1, 2, 3, 4];
  searchingMode:boolean=false;


  changePage(event:PageEvent){
    this.pageNo=event.pageIndex;
    this.pageSize=event.pageSize;
    if(this.searchingMode){
      this.search();
    }else{
    this.getEmployees();
    }
  }

  

 
  getEmployees(): void {
    this.searchingMode=false;
    this.employeeService.getEmployees(this.pageNo, this.pageSize).subscribe(page => {
      this.page = page;
      this.employees=this.page.content;
      this.show_less();
    });
  }

  show_more(i: number) {
    this.employees[i].detailshown = !(this.employees[i].detailshown);
  }

  show_less() {
    for (let emp of this.employees) {
      emp.detailshown = " ";
    }
  }

  form = new FormGroup({
    searchingText: new FormControl('')
  });
  SearchingResults: any[] = [];

  onSubmit() {
    if (this.form.value.searchingText === "") {
      this.getEmployees();
      alert('Type Employee Name')
      this.searchingMode=false;
      return;
    }else{
    this.pageNo=0;
    this.pageSize=1;
    this.search();
    }
  }

  search(){
    this.employeeService.Search(this.form.value.searchingText,this.pageNo, this.pageSize).subscribe(page => {
      this.page=page;
      if (this.page.content.length != 0) {
        this.employees = this.page.content;
        this.searchingMode=true;
        this.show_less();
      } else {
        alert('No matching result \nAll Employess will be shown');
        this.getEmployees();
        this.searchingMode=false;
      }
    });
  }









}

