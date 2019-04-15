import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../home/home.page';
import { iface_tran } from '../home/home.page';
import * as moment from 'moment';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  private tranCollection: AngularFirestoreCollection<iface_tran>;
  
  constructor( private db: AngularFireDatabase, private afs:AngularFirestore) { 
    console.log ("AFS: ", afs); 
    this.tranCollection = afs.collection<iface_tran>('tran', ref => ref.orderBy('timestamp') ); 
    
  }
  
  
  
   // this.tranCollection = afs.collection<iface_tran>('tran', ref => ref.where("timestamp", "<", "1549371600000" ));   //("haber", "==","124")); 
  // this.tran= afs.collection("tran", ref => ref.where("lista","==","X")) .valueChanges() ;//).doc(id).update({ 
   

  getItemsFire() {
    this.itemsCollection = this.afs.collection<Item>('cuentas');
    return  this.itemsCollection.valueChanges();
  }

  getItems() {
  		return this.db.list('cuentas').valueChanges();
  }

  getTran(){
     return  this.tranCollection.valueChanges();
  }

  addTransaction ( data) {
    
    data.time= moment().valueOf(); //.format('DD/MM/YY');
    // console.log("A: " ,a);
    this.tranCollection.add({ debe: data.debe, haber: data.haber, importe: parseFloat(data.importe) , timestamp: data.time });
    // firebase.firestore.FieldValue.serverTimestamp()
  }

  leer (){
   return [ {"cuenta": "111",    "nombre": "Caja"},
            {"cuenta": "124",    "nombre": "St George bank"},
            {"cuenta": "214",    "nombre": "AGL electricidad"}
   ]       
 }


 test (){
    const valor= this.tranCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
    
         // console.log ("LOGid: ",id );
        // console.log ("LOGdata: ",data ); 

          /*afs.collection("tran").doc(id).update({
                "lista": "A",                
          });*/

          /* if (id=="PViObLk1qvjKcMi3VJRM" ){
                afs.collection("tran").doc(id).update({
                    "debe": "502",
                    "favorites.color": "azul"
                  }).then(function() {
                  console.log("Document successfully updated!");
                });
                // console.log("atenti:",afs.collection('tran'));
            }*/
      console.log ("<LOG>: ",{ id, ...data });
      console.log ('TRAN--> ',  this.getTran());
      return { id, ...data };
    })));

  valor.subscribe({
    next(num) { console.log("data seq:",num,"*** num records:",num.length);                      
      this.cities = [];
      this.cities.push(num);
      console.log("cities: ",this.cities);
    },
    complete() { console.log('* Finished sequence *') }
  });
 
} //end test

 // this.ctaservice.leer();
    /*this.sfDocRef.onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });*/

      /*sfDocRef= this.afs.firestore.collection('tran').doc('PViObLk1qvjKcMi3VJRM');
      this.afs.firestore.runTransaction(function(transaction) {
        // This code may get re-run multiple times if there are conflicts.
        // this.sfDocRef= this.afs.collection('tran').doc('PViObLk1qvjKcMi3VJRM');

        return transaction.get(sfDocRef).then(function(sfDoc) {
            if (!sfDoc.exists) {
                throw "Document does not exist!";
            }

            console.log ("importe en transaction: ", sfDoc.data().importe);
            transaction.update(sfDocRef, { debe: "594" ,importe:25});
        });
    }).then(function() {
        console.log("Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });*/

}
