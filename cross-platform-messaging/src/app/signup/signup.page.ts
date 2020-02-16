import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    
  username: string;
  password: string;
  email: string;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  ngOnInit() {
      this.username = this.storage.get("username");
      this.password = this.storage.get("password");
  }
  loadHome(inputVar){
      this.router.navigate(['/home']);
  }
  pingServer(inputVar) {
    this.router.navigate(['/home']);
  }
  validate() {
    alert("Username: "+this.username + " \nPassword: " + this.password + " \nRecovery Email: "+this.email);
  }

}


