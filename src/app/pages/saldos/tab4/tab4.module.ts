import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';


const routes: Routes = [
  {
     path:'',     
         component: Tab4Page
        },

        /*{
          path: 'buttons',
          loadChildren: '../buttons/buttons.module#ButtonsPageModule'
          },{
          path: 'agrega',
          loadChildren: '../tab5/tab5.module#Tab5PageModule'                        
          }
     */
  

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
