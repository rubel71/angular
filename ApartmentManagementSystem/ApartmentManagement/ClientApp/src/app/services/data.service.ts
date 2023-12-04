import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';
import { Catagory } from '../models/catagory';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { ImagePathResponse } from '../models/image-path-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 /* Catagory*/
  getCatagory(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>("http://localhost:31292/api/AptCatagories")
  }
  getCatagorybyId(id: number): Observable<Catagory> {
    return this.http.get<Catagory>(`http://localhost:31292/api/AptCatagories/${id}`)
  }
  postCatagory(data: Catagory): Observable<Catagory> {
    return this.http.post<Catagory>('http://localhost:31292/api/AptCatagories', data)
  }
  putCatagory(data: Catagory): Observable<any> {
    return this.http.put<Catagory>(`http://localhost:31292/api/AptCatagories/${data.aptCatagoryId}`, data)
  }
  deleteCatagory(id: number): Observable<Catagory> {
    return this.http.delete<Catagory>(`http://localhost:31292/api/AptCatagories/${id}`)
  }

  /* Apartments*/
  getApartment(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>("http://localhost:31292/api/Apartments")
  }
 
  postApartment(data: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>('http://localhost:31292/api/Apartments', data)
  }
  /*Designation*/
  getDesignation(): Observable<Designation[]> {
    return this.http.get<Designation[]>("http://localhost:31292/api/Designations")
  }
 
  getDesignabyId(id: number): Observable<Designation> {
    return this.http.get<Designation>(`http://localhost:31292/api/Designations/${id}`)
  }
  postDesignation(data: Designation): Observable<Designation> {
    return this.http.post<Designation>('http://localhost:31292/api/Designations', data)
  }
  putDesignation(data: Designation): Observable<any> {
    return this.http.put<Designation>(`http://localhost:31292/api/Designations/${data.designationId}`, data)
  }
  deleteDesignation(id: number): Observable<Designation> {
    return this.http.delete<Designation>(`http://localhost:31292/api/Designations/${id}`)
  }
  /*Employees*/
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:31292/api/Employees")
  }

  getEmployeeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:31292/api/Employees/${id}`);
  }
  postEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:31292/api/Employees', data);
  }
  putEmployee(data: Employee): Observable<any> {
    return this.http.put<Employee>(`http://localhost:31292/api/Employees/${data.employeeId}`, data);
  }
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`http://localhost:31292/api/Employees/${id}`);
  }
  upload(id: number, f: File): Observable<ImagePathResponse> {
    const formData = new FormData();
    formData.append('file', f);
    return this.http.post<ImagePathResponse>(`http://localhost:31292/api/Employees/Uploads/${id}`, formData);
  }
}
