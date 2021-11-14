import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input('name') name: string = "";
  @Input('src') src: string = "";
  @Input('description') description: string = "";
  @Input('price') price: number = 0;
  @Input('paintingType') paintingType: string = "";
  @Input('eventCategory') eventCategory: string = "";
  @Input('item') item: any;

  @Output('buy') buyEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitBuyEvent(item: any){
    this.buyEvent.emit(item);
  }

}
