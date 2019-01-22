import { Injectable } from '@angular/core';

import { rooms } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms() {
    return rooms;
  }

}
