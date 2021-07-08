import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  cf: any =  {
    firstname: '',
    lastname: '',
    email: '',
    msg: ''
  }
  
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendForm(): void {
    const data = {
      firstname: this.cf.firstname,
      lastname: this.cf.lastname,
      email: this.cf.email,
      msg: this.cf.msg
    };
    
    this.submitted = true;
  }

}
