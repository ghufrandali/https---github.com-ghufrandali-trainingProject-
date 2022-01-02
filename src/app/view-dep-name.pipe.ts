import { Pipe, PipeTransform } from '@angular/core';
import { EmployeesService } from './employees.service';
@Pipe({
  name: 'viewDepName'
})
export class ViewDepNamePipe implements PipeTransform {

  Departments: any[];


  constructor(private service: EmployeesService) {

  }



  transform(value: unknown, ...args: unknown[]): unknown {
    return this.getDepartmentName(value);


  }


  getDepartmentName(value): void {
    this.service.getDepartmenst().subscribe(dept => {
      this.Departments = dept;
      for (let dep of this.Departments)
        if (dep.depId == value)
          return dep.depName;
    });
  }
}
