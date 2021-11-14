import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() items = new Array<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
