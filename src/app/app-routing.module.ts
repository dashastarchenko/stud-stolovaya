import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {StolovayaComponent} from './stolovaya/stolovaya.component';
import {CafeComponent} from './cafe/cafe.component';
import {CartComponent} from './cart/cart.component';
import {PancakesComponent} from './pancakes/pancakes.component';



const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'stl1', component: StolovayaComponent },
  { path: 'cafe', component: CafeComponent},
  { path: 'cart', component: CartComponent},
  { path: 'pancakes', component: PancakesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
