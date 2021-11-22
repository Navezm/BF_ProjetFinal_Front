import { Component, OnInit } from '@angular/core';
import {PaintingQuotation} from "../../../../models/paintingQuotation.model";
import {PaintingQuotationService} from "../../../../services/painting-quotation.service";
import {Router} from "@angular/router";
import {PaintingType} from "../../../../models/paintingType.model";
import {PaintingTypeService} from "../../../../services/painting-type.service";

@Component({
  selector: 'app-painting-quotation-details',
  templateUrl: './painting-quotation-details.component.html',
  styleUrls: ['./painting-quotation-details.component.scss']
})
export class PaintingQuotationDetailsComponent implements OnInit {
  paintingQuotation!: PaintingQuotation;

  constructor(
    private paintingQuotationService: PaintingQuotationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tab: string[] = this.router.url.split('/');
    this.paintingQuotationService.getOneById(Number(tab[tab.length - 1]))
      .subscribe((data) => this.paintingQuotation = data);
  }

  delete(id: any){
    this.paintingQuotationService.delete(id).subscribe();
    this.router.navigateByUrl('admin/painting/quotation');
  }

}
