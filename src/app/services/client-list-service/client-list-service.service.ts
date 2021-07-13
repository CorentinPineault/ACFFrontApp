import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client/client';

@Injectable({
  providedIn: 'root'
})
export class ClientListServiceService {

  private baseUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/all`);
  }
}
