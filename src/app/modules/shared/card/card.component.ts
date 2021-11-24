import {Component, Input, OnInit} from '@angular/core';
import {PaintingType} from "../../../models/paintingType.model";
import {EventCategory} from "../../../models/eventCategory.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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
