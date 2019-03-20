import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../core/_models/menu';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Menu;
  constructor() { }

  ngOnInit() {
  }

}
