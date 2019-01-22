import { Component, OnInit } from '@angular/core';

import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public currentRoom: Room = {id: 1, name: 'bookclub', messages: [{'message': 'hey'}]};

  constructor(
    private roomService: RoomService,
  ) {}

  ngOnInit() {
    this.roomService.getRooms()
        .map(room => room.name === this.currentRoom.name ? this.currentRoom = room : this.currentRoom );
  }
}
