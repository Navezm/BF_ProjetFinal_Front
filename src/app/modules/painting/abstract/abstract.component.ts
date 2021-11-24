import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../models/painting.model";
import {PaintingTypeService} from "../../../services/painting-type.service";

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss']
})
export class AbstractComponent implements OnInit {
  paintingList!: Painting[];

  constructor(
    private paintingTypeService: PaintingTypeService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 2){
    this.paintingTypeService.getPaintingByType(id)
      .subscribe((paintings: Painting[]) => {
        this.paintingList = paintings;
      });
  }
}
