import { Injectable } from '@angular/core';

import { rooms } from '../room';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms = rooms;

  constructor() { }

  getRooms() {
    return rooms;
  }

  addMessage(currentRoom: Room, message: any) {
    this.rooms.map(room => {
      if (currentRoom.name === room.name) {
        currentRoom.messages.push(message);
      }
    });
  }

}
