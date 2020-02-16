import { Component, OnInit, Inject } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-individual-message',
  templateUrl: './individual-message.page.html',
  styleUrls: ['./individual-message.page.scss'],
})
export class IndividualMessagePage implements OnInit {
    public textMessage: String;
    mgs;

  constructor(private router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient) { }

  ngOnInit() {
      this.mgs = this.storage.get("messages");
  }

  loadData(ev)
  {
      console.log(ev);
  }

  plusBtn(ev)
  {
      alert(this.textMessage);
  }

}
