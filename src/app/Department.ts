import { Employee } from "./employee"
export interface Department {
    depId:number,
    depName:string,
    employees : Employee[]
}