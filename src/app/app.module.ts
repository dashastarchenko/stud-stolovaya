import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './core/views/root/page.component';

import { CartComponent } from './pages/cart/cart.component';
import { StolovayaComponent } from './pages/stolovaya/stolovaya.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { PancakesComponent } from './pages/pancakes/pancakes.component';
import { BufetComponent } from './pages/bufet/bufet.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import {UIModule} from './ui/ui.module';
import { TestMaterialModule } from './core/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeftColComponent} from './core/views/body/left-col/left-col.component';
import {RightColComponent} from './core/views/body/right-col/right-col.component';
import {MiddleColComponent} from './core/views/body/middle-col/middle-col.component';
import {BodyComponent} from './core/views/body/body.component';
import {MainMenuComponent} from './core/views/main-menu/main-menu.component';
import {MenuComponent} from './core/views/main-menu/menu/menu.component';
import {ProfileComponent} from './core/views/main-menu/profile/profile.component';
import {FeedbackComponent, FeedbackDialogComponent} from './core/views/main-menu/profile/feedback/feedback.component';
import {SearchComponent} from './core/views/main-menu/search/search.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    PageComponent,
    LeftColComponent,
    RightColComponent,
    MiddleColComponent,
    BodyComponent,
    MainMenuComponent,
    MenuComponent,
    ProfileComponent,
    FeedbackComponent,
    SearchComponent,
    CartComponent,
    StolovayaComponent,
    CafeComponent,
    PancakesComponent,
    BufetComponent,
    ItemDetailComponent,
    FeedbackComponent,
    FeedbackDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UIModule,
    TestMaterialModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [FeedbackDialogComponent, FeedbackComponent],
  bootstrap: [PageComponent]
})
export class AppModule { }
