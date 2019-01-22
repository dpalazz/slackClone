import { Injectable } from '@angular/core';

import { rooms } from '../room';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms = rooms;
  public currentRoom: Room = this.rooms[0];

  constructor() { }

  getRooms() {
    return rooms;
  }

  updateRoom(room: Room) {
    this.currentRoom = room;
    console.log(this.currentRoom);
  }

  addMessage(currentRoom: Room, message: any) {
    this.rooms.map(room => {
      if (currentRoom.name === room.name) {
        currentRoom.messages.push(message);
      }
    });
  }

}
