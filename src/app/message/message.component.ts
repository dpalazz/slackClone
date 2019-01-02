import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public time: number;
  public username: string;
  @Input() messages: Array<object>;

  constructor() { }

  ngOnInit() {
    this.time = Date.now();
  }

}
