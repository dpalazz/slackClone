import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

import { RoomService } from './services/room.service';
import { Room } from './models/room';
import { firebaseConfig } from './credentials';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public rooms = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public roomService: RoomService,
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  updateCurrentRoom(room: Room) {
    this.roomService.updateRoom(room);
  }
}
