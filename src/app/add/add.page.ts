import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ActionSheetController  } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private router:Router, public navCtrl:NavController, private action:ActionSheetController) { }

  ngOnInit() {
  }

  back(){
  	 // this.router.navigateByUrl("/home");
     this.navCtrl.navigateBack('/home');
  	
  }

  go (link){

     this.navCtrl.navigateForward(link);
  }


  async morefunc() {
        const actionSheet = await this.action.create({
          header: 'Albums',
          buttons: [{
            text: 'Edit',
            icon: 'create',
            handler: () => {
              console.log('Edit clicked');
            }
          }, {
            text: 'Lista',
            icon: 'clipboard',
            handler: () => {
              console.log('Lista clicked');
            }
          }, {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Delete clicked');
            }
          },{
            text: 'Favorite',
            icon: 'heart',
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
        await actionSheet.present();
      }


  }