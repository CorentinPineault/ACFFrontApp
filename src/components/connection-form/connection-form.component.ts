import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //if (this.tokenStorage.getToken()) {
    //  this.isLoggedIn = true;
    //  this.roles = this.tokenStorage.getUser().roles;
    //}
  }

  onSubmit(): void {
    const { email, password } = this.form;

    //this.authService.login(email, password).subscribe(
    //  data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //window.location.reload();
    //  },
    //  err => {
     //   this.errorMessage = err.error.message;
    //    this.isLoginFailed = true;
    //  }
   // );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
