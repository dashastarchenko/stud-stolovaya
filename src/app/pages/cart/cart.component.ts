import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Menu } from '../../core/_models/menu';
import { Item } from '../../core/_models/item';
import {MenuService} from '../../core/_services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  displayedColumns: string[] = ['item', 'quantity', 'delete', 'cost' ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      id = Number(id);
      if (id) {
        var it: Item = {
          menu: this.menuService.find(id),
          quantity: 1
        };
        console.log(it)
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(it));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let it: Item = JSON.parse(cart[i]);
            if (it.menu.id == id) { ///menu.id ??
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(it));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let it: Item = JSON.parse(cart[index]);
            it.quantity += 1;
            cart[index] = JSON.stringify(it);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let it = JSON.parse(cart[i]);
      this.items.push({
        menu: it.menu,
        quantity: it.quantity
      });
      this.total += it.menu.cost * it.quantity; //menu.cost тоже нет
    }
  }

  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let it: Item = JSON.parse(cart[i]);
      if (it.menu.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  getTotalCost() {
    return (this.total);
    // return this.items.map(it => it.menu.cost).reduce((acc, value) => acc + value, 0);
  }

}

