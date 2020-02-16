import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;
    ip: String;
    port: String;
    password: string;
    constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient) {
        this.username = '';
        this.password = '';
        this.storage.set("test", "abcd");
    }
    pingServer() {
        this.http.get(this.genURL({ "target": "conversation", "action": "request", "username": this.username, "password": this.password })).subscribe((data) =>{
            this.storage.set("conversations",data["data"]);
            this.router.navigate(['/messages']);
        });
        

    }
    openSignupPage() {
        this.storage.set("username", this.username);
        this.storage.set("password", this.password);
        this.router.navigate(['/signup']);
    }
    setIP() {
        var result = prompt("Enter the IP");
        if (result != null) this.storage.set("ip", result);
        result = prompt("Enter the port");
        if (result != null) this.storage.set("port", result);
        this.ip = this.storage.get("ip");
        this.port = this.storage.get("port");
    }
    genURL(dict) {
        var str = "http://" + this.storage.get("ip") + ":" + this.storage.get("port") + "/?";
        for (var key in dict) {
            str += key + "=" + encodeURIComponent(dict[key]) + "&";
        }
        str = str.substring(0, str.length - 1);
        return str;
    }
}
