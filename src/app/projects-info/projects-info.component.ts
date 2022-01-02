import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-projects-info',
  templateUrl: './projects-info.component.html',
  styleUrls: ['./projects-info.component.css']
})
export class ProjectsInfoComponent implements OnInit {

  projects:any;

  constructor(private service : EmployeesService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    this.service.getProjects().subscribe(projects=>{
      this.projects=projects; 
    });
  }

}
