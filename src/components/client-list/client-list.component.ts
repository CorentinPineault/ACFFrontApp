import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client/client';
import { ClientListServiceService } from 'src/app/services/client-list-service/client-list-service.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList?: Client[];
  isLoggedIn = false;
  constructor(private cliListService: ClientListServiceService, private tokenStorage: TokenStorageService) { }
    
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.getClients();
    }
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
