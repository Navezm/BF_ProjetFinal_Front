import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../models/painting.model";
import {PaintingTypeService} from "../../../services/painting-type.service";
import {PaintingService} from "../../../services/painting.service";

@Component({
  selector: 'app-all-painting',
  templateUrl: './all-painting.component.html',
  styleUrls: ['./all-painting.component.scss']
})
export class AllPaintingComponent implements OnInit {
  paintingList!: Painting[];
  backPicture: Blob;

  constructor(
    private paintingService: PaintingService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.paintingService.getAll()
      .subscribe( (data) => this.paintingList = data );
  }
}
