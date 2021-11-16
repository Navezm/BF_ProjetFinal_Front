import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../../models/painting.model";
import {PaintingService} from "../../../../services/painting.service";

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss']
})
export class PaintingListComponent implements OnInit {
  paintingList!: Painting[];

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
