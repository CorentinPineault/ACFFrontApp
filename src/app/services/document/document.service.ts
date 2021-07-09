import { Injectable } from '@angular/core';

const api = "http://localhost:8080/documents";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }
}
