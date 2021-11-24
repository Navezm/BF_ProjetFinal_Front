import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../models/painting.model";
import {PaintingTypeService} from "../../../services/painting-type.service";

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  paintingList!: Painting[];

  constructor(
    private paintingTypeService: PaintingTypeService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(id: number = 1){
    this.paintingTypeService.getPaintingByType(id)
      .subscribe((paintings: Painting[]) => {
        this.paintingList = paintings;
      });
  }
}
