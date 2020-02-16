import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    public objs;


  constructor() { }

  ngOnInit() {
      this.objs = this.fetchConversations()
  }
  plusBtn(ev)
  {
    alert(ev);
  }
  fetchConversations()
  {
      let objects = [
          {title: "Drop Collaboration Team", desc:"", url: "url"},
          {title: "Akash and John", desc:"", url: "url"},
          {title: "John Doe", desc:"", url: "url"},
          {title: "Jane Doe", desc:"", url: "url"}
      ]
      return objects;
  }

}
