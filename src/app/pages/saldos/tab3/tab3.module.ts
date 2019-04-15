import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Tab3Page } from './tab3.page';
import { PopoverComponent } from './popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  }
];

@NgModule({
  entryComponents: [PopoverComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3Page, PopoverComponent]
})
export class Tab3PageModule {}
