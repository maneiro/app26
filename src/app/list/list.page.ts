import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  private user:{name:String;username:String}={name:'Alex',username:'amaneiro'};
  constructor( public toastCtr : ToastController) {
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

async presentToastWithOptions() {
    const toast = await this.toastCtr.create({
      message: 'Buenos Aires !!',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done',
      translucent: true,
      cssClass: "changeToast"
    });
    toast.present();
  }


}
