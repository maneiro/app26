import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SaldosPage } from './saldos.page';

const routes: Routes = [
 {
    path: '',
    component: SaldosPage,
    children: [ 
       {
          path: 'tab1',
          loadChildren: '../acreedores/acreedores.module#AcreedoresPageModule'
       },{
          path: 'tab2',                       
          loadChildren:  './tab2/tab2.module#Tab2PageModule'
          // loadChildren: '../../list/list.module#ListPageModule'
       },{
          path: 'tab3',                       
          loadChildren: './tab3/tab3.module#Tab3PageModule'
       },{
          path: 'tab4',
          children: [ {
                path: '',
                loadChildren : './tab4/tab4.module#Tab4PageModule' },
              {
                path: 'buttons',
                loadChildren: './buttons/buttons.module#ButtonsPageModule'},
              {
                path: 'agrega',
                loadChildren: './tab5/tab5.module#Tab5PageModule'}
          ]
        },{
           path: '',
           redirectTo: '/saldos/tab1',
           pathMatch: 'full'
        }
     ]},
    {
    path: '',
    redirectTo: '/saldos/tab1',
    pathMatch: 'full'          
    }
 ];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaldosPage]
})
export class SaldosPageModule {}
