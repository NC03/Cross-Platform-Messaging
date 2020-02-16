import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    public objs;


    constructor(private router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient) { }

    ngOnInit() {
        this.objs = this.storage.get("conversations")
    }
    plusBtn(ev) {
        alert(ev);
    }
    fetchConversations() {
        var uname = this.storage.get("username");
        var passwd = this.storage.get("password");
        let objects = [
            { title: "Drop Collaboration Team", desc: "", url: "url" },
            { title: "Akash and John", desc: "", url: "url" },
            { title: "John Doe", desc: "", url: "url" },
            { title: "Jane Doe", desc: "", url: "url" }
        ]
        return objects;
    }
    openConversation(num) {
        alert(num);
        this.http.get(this.genURL({ "target": "message", "action": "request", "username": this.storage.get("username"), "password": this.storage.get("password"),"id":num })).subscribe((data) =>{
            if(data["success"] == true)
            {
                this.storage.set("conversations",data["data"]);
                this.router.navigate(['/messages']);
            }else{
                alert(data["errorMessage"]);
            }
        });
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
