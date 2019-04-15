import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'saldos',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'acreedores', loadChildren: './pages/acreedores/acreedores.module#AcreedoresPageModule' },
  { path: 'saldos', loadChildren: './pages/saldos/saldos.module#SaldosPageModule' },
  // { path: 'saldos/tab1',outlet: 'one', loadChildren: './pages/saldos/saldos.module#SaldosPageModule'  },
 
  // { path: 'tab3', loadChildren: './pages/saldos/tab3/tab3.module#Tab3PageModule' },
  // { path: 'tab4', loadChildren: './pages/saldos/tab4/tab4.module#Tab4PageModule' },
  // { path: 'buttons', loadChildren: './pages/saldos/buttons/buttons.module#ButtonsPageModule' },
 
  // { path: 'agrega', loadChildren: './pages/saldos/tab5/tab5.module#Tab5PageModule' },
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
