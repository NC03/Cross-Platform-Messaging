import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    
  username: string;
  password: string;
  email: string;
  constructor(private router: Router) {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  ngOnInit() {
  }
  loadHome(inputVar){
      this.router.navigate(['/home']);
  }
  pingServer(inputVar) {
    this.router.navigate(['/messages']);
  }
  validate() {
    alert("Username: "+this.username + " \nPassword: " + this.password + " \nRecovery Email: "+this.email);
  }

}


