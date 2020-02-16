import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    public objs;


    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

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
    }

}
