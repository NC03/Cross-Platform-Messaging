import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { AlertController } from '@ionic-angular';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    public objs;


    constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient/*, private alertCtrl: AlertController*/) { }

    ngOnInit() {
        this.refresh();
    }
    plusBtn(ev) {
        var users = prompt("Enter Users");
        var title = prompt("Enter Title");
        if (users != null && title != null) {
            var arrVal = users.split(",");
            var titleVal = title;
            this.http.get(this.genURL({ "target": "conversation", "action": "create", "username": this.storage.get("username"), "password": this.storage.get("password"), "data": JSON.stringify({ "authUsers": arrVal, "title": titleVal }) })).subscribe((data) => {
                if (data["success"] == true) {
                    this.refresh();
                } else {
                    alert(data["errorMessage"]);
                }
            });
        }
    }
    refresh() {
        this.http.get(this.genURL({ "target": "conversation", "action": "request", "username": this.storage.get("username"), "password": this.storage.get("password") })).subscribe((data) => {
            if (data["success"] == true) {
                this.storage.set("conversations", data["data"]);
                this.objs = data["data"]
            } else {
                alert(data["errorMessage"]);
            }
        });
    }
    /*presentPrompt() {
        let alert = this.alertCtrl.create({
          title: 'Add Conversation',
          inputs: [
            {
              name: 'username',
              placeholder: 'Username'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Login',
              handler: data => {
             //   if (User.isValid(data.username, data.password)) {
                  // logged in!
             //   } else {
                  // invalid login
              //    return false;
              //  }
              }
            }
          ]
        });
        alert.present();
      }*/
    fetchConversations() {
        var uname = this.storage.get("username");
        var passwd = this.storage.get("password");
        let objects = [
            { title: "Drop Collaboration Team", desc: "", url: "url" },
            { title: "Akash and John", desc: "", url: "url" },
            { title: "John Doe", desc: "", url: "url" },
            { title: "Jane Doe", desc: "", url: "url" }
        ];
        return objects;
    }
    openConversation(num) {
        this.storage.set("conversationId", num);
        this.http.get(this.genURL({ "target": "message", "action": "request", "username": this.storage.get("username"), "password": this.storage.get("password"), "id": num })).subscribe((data) => {
            if (data["success"] == true) {
                this.storage.set("messages", data["data"]);
                this.router.navigate(['/individual-message']);
            } else {
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