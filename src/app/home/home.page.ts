import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public rooms = ['room1', 'room2', 'room3'];
  public currentRoom: string;
  public messageContent: string;
  public displayMessage: boolean;

  ngOnInit() {
    this.currentRoom = this.rooms[0];
  }

  public collectMessageContent() {
    this.displayMessage = true;
  }
}
