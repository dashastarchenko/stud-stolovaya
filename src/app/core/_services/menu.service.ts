import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../_models/menu';
import { STL_MENU } from '../_data/mock-stolovaya';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu[];
  constructor() {
    this.menu = this.getMenu();
  }

  find(id: number): Menu {
    return this.menu[this.getSelectedIndex(id)];
  }

  getMenu(): Menu[] {
    return STL_MENU;
  }

  private getSelectedIndex(id: number) {
    for (let i = 0; i < STL_MENU.length; i++) {
      console.log(typeof(this.getMenu()[i].id), typeof(id))
      if (this.getMenu()[i].id === id) {
        return i;
      }
    }
    return -1;
  }

}
