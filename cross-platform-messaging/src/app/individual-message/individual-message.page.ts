import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-individual-message',
  templateUrl: './individual-message.page.html',
  styleUrls: ['./individual-message.page.scss'],
})
export class IndividualMessagePage implements OnInit {

    
  constructor() { }

  ngOnInit() {
  }

  loadData(ev)
  {
      console.log(ev);
  }

}
