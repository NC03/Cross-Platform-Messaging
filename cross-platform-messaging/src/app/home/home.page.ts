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
    pingServer(inputVar) {
        this.router.navigate(['/signup']);
        // alert(inputVar);
    }
    validate() {
      alert(this.username + " " + this.password);
    }
}
