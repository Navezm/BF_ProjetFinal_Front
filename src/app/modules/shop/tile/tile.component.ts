import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
