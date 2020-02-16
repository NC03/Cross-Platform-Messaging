import { Component, OnInit, Inject } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-individual-message',
  templateUrl: './individual-message.page.html',
  styleUrls: ['./individual-message.page.scss'],
})
export class IndividualMessagePage implements OnInit {
    public textMessage: string;

  constructor(private http: HttpClient) { }

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

}
