import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-message',
  templateUrl: './group-message.page.html',
  styleUrls: ['./group-message.page.scss'],
})
export class GroupMessagePage implements OnInit {
    public textMessage: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  loadData(ev)
  {
      console.log(ev);
  }

  plusBtn(ev)
  {
      alert(this.textMessage);
  }
  loadHome(inputVar) {
    this.router.navigate(['/messages']);
  }
  

}
