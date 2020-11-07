import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrlRoom = `http://localhost:8000/api/students`;
  
  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrlRoom}`);
  }

  getStudentById(matricID : string): Observable<object> {
    return this.http.get(`${this.baseUrlRoom}/${matricID}`);
  }  

  createStudent(student : any):  Observable<object> {
    return this.http.post(`${this.baseUrlRoom}`, student);
  }  

  updateStudent(matricID : string, student : any):  Observable<object> {
    return this.http.put(`${this.baseUrlRoom}/${matricID}`, student);
  } 
  
  deleteStudent(matricID : string):  Observable<object> {
    return this.http.delete(`${this.baseUrlRoom}/${matricID}`);
  } 



}
