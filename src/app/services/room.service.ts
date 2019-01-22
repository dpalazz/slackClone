import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { rooms } from '../room';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms = rooms;
  public currentRoom = new BehaviorSubject(this.rooms[0]);

  constructor() {}

  getRooms() {
    return this.rooms;
  }

  updateRoom(room) {
    this.currentRoom.next(room);
  }

  addMessage(currentRoom: Room, message: any) {
    this.rooms.map(room => {
      if (currentRoom.name === room.name) {
        currentRoom.messages.push(message);
      }
    });
  }

}
