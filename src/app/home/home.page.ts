import { Component, OnInit } from '@angular/core';

import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public currentRoom;


  constructor(
    private roomService: RoomService,
  ) {}

  ngOnInit() {
    this.roomService.currentRoom.subscribe(value => this.currentRoom = value);
  }
}
