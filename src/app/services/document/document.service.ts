import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = "http://localhost:8080/documents";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}

  upload(id:number, file: File){
    return this.http.post<File>(`${api}/${id}`, file);
  }

  load(id:number): Observable<any>{
    return this.http.get<any>(`${api}/${id}`);
  }
}
