import { Component, OnInit } from '@angular/core';

import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public currentRoom: Room = this.roomService.currentRoom;

  constructor(
    private roomService: RoomService,
  ) {}

  ngOnInit() { }
}
