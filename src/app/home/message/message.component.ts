import { Component, OnInit, Input } from '@angular/core';

import { Room } from '../../models/room';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() currentRoom: Room;

  constructor() { }

  ngOnInit() {
  }

}
