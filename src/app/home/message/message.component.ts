import { Component, OnInit, Input } from '@angular/core';

import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() currentRoom: Room;
  public messageInput = '';
  public roomService: RoomService;

  constructor(roomService: RoomService) { }

  ngOnInit() {
  }

  createMessage() {
    this.currentRoom.messages.push({message: this.messageInput});
  }

}
