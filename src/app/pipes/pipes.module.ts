import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Filter2Pipe} from './filter2.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [Filter2Pipe],
  exports: [Filter2Pipe]
})
export class AppPipesModule { }