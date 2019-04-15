import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AcreedoresPage } from './acreedores.page';
import { ModalComponent} from './modal/modal.component';


const routes: Routes = [
  {
    path: '',
    component: AcreedoresPage
  }
];

@NgModule({
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcreedoresPage, ModalComponent]
})
export class AcreedoresPageModule {}
