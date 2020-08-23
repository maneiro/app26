import { Component } from '@angular/core';
import {CuentasService} from '../services/cuentas.service';
// import { Events } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';


// import {CuentasList} from '../models/CuentasList/CuentasList.interface';
export interface Item { nombre: string; cuenta:string}
export interface iface_tran { debe: string; haber:string; importe: number; timestamp:any}

 @Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {

 // cuentas = {} as CuentasList;
 
 items: Observable<any[]>;
 tran : Observable<any[]>;
 valor: Observable<any>;
 tranForm:iface_tran;
 sfDocRef:any;
 
 itemfire: Observable<Item[]>;
 grupo:any[];
 cities:any[];


constructor (  public ctaservice:CuentasService){

    this.items = ctaservice.getItems();
     
    this.itemfire = ctaservice.getItemsFire();
    // this.dataRef$.subscribe (x => console.log(X) );
      
    this.tran = ctaservice.getTran();
       
    this.tranForm={} as iface_tran;

    this.grupo=[  {  "cuenta": "502",   "nombre": "Gastos"}  ];

    ctaservice.test();

    console.log ("firebase: ",  firebase); 

    
    

  }


 
addTran () {
  this.ctaservice.addTransaction(this.tranForm );
  this.tranForm= {} as iface_tran;
}

procesar (){

  let sfDocRef :any;
  this.grupo= [...this.grupo, ...(this.ctaservice.leer ())];
  
  // this.events.publish('testevent', {key: 'actualizar'});
 

}





}