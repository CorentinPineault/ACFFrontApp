import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message/message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  messageList?: Message[];
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  getMessages(): void {
  }

  refreshList(): void {
  } 

}
