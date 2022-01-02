import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from './Department';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 

  public employees: Employee []= [ ]

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };

  constructor( private http: HttpClient ) {

   }

  
  getEmployees(pageNo,pageSize): Observable <any[]> {
    return this.http.get<any[]>(`http://localhost:8084/getAllEmployees?pageNo=${pageNo}&pageSize=${pageSize}`); 
  }

  getDepartmenst(): Observable <any> {
    return this.http.get<any[]>("http://localhost:8084/getAllDepartments"); 
  }

  getProjects(): Observable <any> {
    return this.http.get<any[]>("http://localhost:8084/getAllProjects"); 
  }

  getemployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:8084/getEmployee/${id}`);
  }

  AddEmployee(Emp): Observable<any>{
    return this.http.post<Employee>('http://localhost:8084/Create',Emp);
  }

  AddDep(Dep): Observable<any>{
    return this.http.post<any>("http://localhost:8084/newDep",Dep);

  }

  UpdateEmployee(Emp): Observable<any>{
    return this.http.post<Employee>('http://localhost:8084/Update',Emp);

  }

  Search(searchingText,pageNo,pageSize):Observable<any[]>{
    return this.http.get<any>(`http://localhost:8084/Search/${searchingText}?pageNo=${pageNo}&pageSize=${pageSize}`);
  }

}
