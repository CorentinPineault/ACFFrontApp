import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: any =  {
    firstname: '',
    lastname: '',
    email: '',
    demand: ''
  }
  
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendForm(): void {
    const data = {
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      email: this.form.email,
      demand: this.form.msg
    };
    
    this.submitted = true;
  }

}
