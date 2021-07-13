import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client/client';
import { ClientListServiceService } from 'src/app/services/client-list-service/client-list-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList?: Client[];

  constructor(private cliListService: ClientListServiceService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.cliListService.findAll()
    .subscribe(
      data => {
        this.clientList = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


}
