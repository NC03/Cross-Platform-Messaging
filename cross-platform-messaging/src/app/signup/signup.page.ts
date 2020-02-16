import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    username: string;
    password: string;
    email: string;
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, private http: HttpClient) {
        this.username = '';
        this.password = '';
        this.email = '';
    }

    ngOnInit() {
        this.username = this.storage.get("username");
        this.password = this.storage.get("password");
    }
    loadHome(inputVar) {
        this.router.navigate(['/home']);
    }
    pingServer(inputVar) {
        this.http.get(this.genURL({ "target": "user", "action": "create", "username": this.username, "password": this.password })).subscribe((data) =>{
            if(data["success"] == true)
            {
                this.router.navigate(['/home']);
            }else{
                alert(data["errorMessage"]);
            }
        });
    }
    validate() {
        alert("Username: " + this.username + " \nPassword: " + this.password + " \nRecovery Email: " + this.email);
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


