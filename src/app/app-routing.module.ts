import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {StolovayaComponent} from './pages/stolovaya/stolovaya.component';
import {CafeComponent} from './pages/cafe/cafe.component';
import {CartComponent} from './pages/cart/cart.component';
import {PancakesComponent} from './pages/pancakes/pancakes.component';



const routes: Routes = [
  { path: '', redirectTo: '/stl1', pathMatch: 'full' },
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
