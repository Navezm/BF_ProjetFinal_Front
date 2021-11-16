import { Component, OnInit } from '@angular/core';
import {PaintingQuotation} from "../../../../models/paintingQuotation.model";
import {PaintingQuotationService} from "../../../../services/painting-quotation.service";

@Component({
  selector: 'app-painting-quotation-list',
  templateUrl: './painting-quotation-list.component.html',
  styleUrls: ['./painting-quotation-list.component.scss']
})
export class PaintingQuotationListComponent implements OnInit {
  paintingQuotationList!: PaintingQuotation[];

  constructor(
    private paintingQuotationService: PaintingQuotationService
  ) { }

  ngOnInit(): void {
    this.paintingQuotationService.getAll()
      .subscribe((data) => this.paintingQuotationList = data);
  }
}
