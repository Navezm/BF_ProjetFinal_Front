import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../../models/painting.model";
import {PaintingService} from "../../../../services/painting.service";
import {Router} from "@angular/router";
import {UtilService} from "../../../../services/util.service";

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss']
})
export class PaintingListComponent implements OnInit {
  paintingList!: Painting[];

  constructor(
    private paintingService: PaintingService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.paintingService.getAll()
      .subscribe( (data) => this.paintingList = data );
  }

  delete(id: number){
    this.paintingService.delete(id).subscribe((data) => console.log(data));
    this.utilService.reloadComponent();
  }
}
