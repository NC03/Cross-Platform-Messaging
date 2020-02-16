import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;
  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }
  pingServer2() {
      this.router.navigate(['/messages']);
  }
  pingServer() {
    this.router.navigate(['/signup']);
  }
  validate() {
    alert(this.username + " " + this.password);
  }
}
