import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent} from './modal/modal.component';



@Component({
  selector: 'app-acreedores',
  templateUrl: './acreedores.page.html',
  styleUrls: ['./acreedores.page.scss'],
})
export class AcreedoresPage implements OnInit {

  constructor(public navCtrl:NavController, public modalctrl: ModalController) { 
	}

	

  ngOnInit() {
  }

	back(){ 	
       this.navCtrl.navigateBack('/home');
  	}


  	modal(){
		this.presentModal();		
  	}

  	async presentModal() {
	    const modal = await this.modalctrl.create({
	      component: ModalComponent,
	      componentProps: { value: 123 }
	    });
	    return await modal.present();
    }

	


}
