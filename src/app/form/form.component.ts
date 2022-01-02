import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newEmp: any;
  employee: any;
  AllEmployees: any;
  Departments:any;
  projects:any;

  constructor(private route: ActivatedRoute,
    private EmployeesService: EmployeesService,
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.getDepartments();
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if (!Number.isNaN(id)) {
      this.getEmployee();
        }
  }



  EmployeeForm = new FormGroup({   
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]
    ),
    salary: new FormControl('', Validators.min(300)),
    job: new FormControl('', Validators.required),
    fired: new FormControl(''),
    dob: new FormControl(''),
    department : new FormGroup({
      id :new FormControl('')
    }),
    // projects:new FormGroup({
    //   id :new FormControl('')
    // })
  });

  OnSubmit() {
    this.newEmp = JSON.parse(JSON.stringify(this.EmployeeForm.value));
    // if(!(this.newEmp.projects.id==="")){
    //   let proIds=this.newEmp.projects.id as Array<any>;
    //   this.newEmp.projects = proIds.map(e=>{
    //     return {id:Number(e)}; 
    //   });
    // }else{
    //   this.newEmp.projects=[];
    // }
    if (this.newEmp.id) {
      this.EmployeesService.UpdateEmployee(this.newEmp).subscribe(emp=>{
        alert(this.newEmp.name +"'s info is updated"); 
      });
    } else {
      this.EmployeesService.AddEmployee(this.newEmp).subscribe(emp=>{
        alert(this.newEmp.name +" is added as new employee");
        this.EmployeeForm.reset(); 
      });
    }
  }

  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.EmployeesService.getemployee(id).subscribe(emp => {
      this.employee = emp;
      this.EmployeeForm.patchValue(this.employee);
      this.EmployeeForm.get('department').patchValue({
        id : String(this.employee.department.id)
           });
      let projectId:String[]=[]
      for(let project of this.employee.projects)
           projectId.push(String(project.id));
      // this.EmployeeForm.get('projects').patchValue({
      //   id:projectId
      // })
    });
  }

  getDepartments(): void {
    this.EmployeesService.getDepartmenst().subscribe(dept => {
      this.Departments = dept;
    });
  }

  getProjects() {
    this.EmployeesService.getProjects().subscribe(projects=>{
      this.projects=projects; 
    });
  }


}
