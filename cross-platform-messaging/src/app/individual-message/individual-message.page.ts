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
    }

    plusBtn(ev) {
        alert(this.textMessage);
    }
    goBack(inputVar) {
      this.router.navigate(['/messages']);
    }

}
