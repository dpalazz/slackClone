import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public rooms = ['room1', 'room2', 'room3'];
  public messages = [];
  public messageInput = '';
  public currentRoom: string;

  ngOnInit() {
    this.currentRoom = this.rooms[0];
  }

  public createMessage() {
    this.messages.push(this.messageInput);
  }
}
