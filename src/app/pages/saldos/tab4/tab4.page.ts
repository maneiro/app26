import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( public navCtrl:NavController) { }


  ngOnInit() {
  }

  buttons(){
  	this.navCtrl.navigateForward('saldos/tab4/buttons');
  	// this.navCtrl.navigateBack('/home');

  }

  agregar() {
    this.navCtrl.navigateForward('saldos/tab4/agrega');    
  }


}