import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import {Inject, Injectable} from "@angular/core";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;
    password: string;
    constructor( private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
        this.username = '';
        this.password = '';
        this.storage.set("test", "abcd");
    }
    pingServer() {
        alert(this.storage.get("test"));
        this.router.navigate(['/messages']);
    }
    openSignupPage() {
        this.router.navigate(['/signup']);
    }
    validate() {
        alert(this.username + " " + this.password);
    }
}
