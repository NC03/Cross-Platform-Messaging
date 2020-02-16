import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-individual-message',
    templateUrl: './individual-message.page.html',
    styleUrls: ['./individual-message.page.scss'],
})
export class IndividualMessagePage implements OnInit {
    public textMessage: String;
    mgs;
    header;

    constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient) { }

    ngOnInit() {
        this.mgs = this.storage.get("messages");
        var idx = 0;
        for (var i = 0; i < this.storage.get("conversations").length; i++) {
            if (this.storage.get("conversations")[i].id == this.storage.get("conversationId")) {
                idx = i;
            }
        }
        this.header = this.storage.get("conversations")[idx].title;
    }

    loadData(ev) {
        console.log(ev);
        alert(ev);
    }

    sendBtn(ev) {
        this.http.get(this.genURL({ "target": "message", "action": "create", "username": this.storage.get("username"), "password": this.storage.get("passsword"), "id":this.storage.get("conversationId"), "data":JSON.stringify({"authConversation": this.storage.get("conversationId"),"sender": this.storage.get("username"),"content":  this.textMessage})})).subscribe((data) =>{
            if(data["success"] == true)
            {
                this.storage.set("conversations",data["data"]);
                this.router.navigate(['/messages']);
                this.refreshMessages();
            }else{
                alert(data["errorMessage"]);
                this.refreshMessages();
            }
        });

    }
    goBack(inputVar) {
      this.router.navigate(['/messages']);
    }
    genURL(dict) {
        var str = "http://" + this.storage.get("ip") + ":" + this.storage.get("port") + "/?";
        for (var key in dict) {
            str += key + "=" + encodeURIComponent(dict[key]) + "&";
        }
        str = str.substring(0, str.length - 1);
        return str;
    }
    refreshMessages()
    {
        this.http.get(this.genURL({ "target": "message", "action": "request", "username": this.storage.get("username"), "password": this.storage.get("password"), "id": this.storage.get("conversationId") })).subscribe((data) => {
            if (data["success"] == true) {
                this.storage.set("messages", data["data"]);
                this.mgs = this.storage.get("messages");
            } else {
                alert(data["errorMessage"]);
            }
        });
    }
}
