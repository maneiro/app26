import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent} from '../../acreedores/modal/modal.component';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent} from './popover/popover.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor( public modalctrl: ModalController , public popoverController: PopoverController) { }

  ngOnInit() {
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
		
		
popi(){
	this.presentPopover(1);
}

    async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true,
			animated:true,
			backdropDismiss: true
		});
		return await popover.present();
	}


}
