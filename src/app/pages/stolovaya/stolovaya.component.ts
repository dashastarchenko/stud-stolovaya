import { Component, OnInit } from '@angular/core';
import { Menu } from '../../core/_models/menu';
import { STL_MENU } from '../../core/_data/mock-stolovaya';
import {MenuService} from '../../core/_services/menu.service';

@Component({
  selector: 'app-stolovaya',
  templateUrl: './stolovaya.component.html',
  styleUrls: ['./stolovaya.component.css']
})
export class StolovayaComponent implements OnInit {

  menu: Menu[];
  selectedItem: Menu;
  displayedColumns: string[] = ['name', 'cost', 'buy'];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  onSelect(item: Menu): void {
    this.selectedItem = item;
  }

  getMenu(): void {
    // this.menuService.getMenu().subscribe(menu => this.menu=menu);
    this.menu = this.menuService.getMenu();
  }

}
