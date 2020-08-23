import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Events } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // public events: Events
  ) {
    this.initializeApp();

     /*this.events.subscribe('testevent', (data) => {
      console.log('testevent from appcomponent y con data: ',data);      
      if  ( ! this.appPages.find(x => { return x.title=="saldos" }) ) { 
           this.appPages.push( {
            title: 'saldos',
            url: '/saldos',
            icon: 'star'
          });
            // console.log("pages de menu: " ,this.appPages,"events: ",this.events);
            // this.events.unsubscribe('testevent');
       }       
    }); */

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
