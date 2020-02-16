import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;
    password: string;
    constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
        this.username = '';
        this.password = '';
        this.storage.set("test", "abcd");
    }
    pingServer() {
        if (this.validate(this.username, this.password)) {
            this.storage.set("username", this.username);
            this.storage.set("password", this.password);
            this.router.navigate(['/messages']);
        }
    }
    openSignupPage() {
        this.storage.set("username", this.username);
        this.storage.set("password", this.password);
        this.router.navigate(['/signup']);
    }
    validate(uname, passwd) {
        return prompt(this.username + " " + this.password) != null;
    }
}
