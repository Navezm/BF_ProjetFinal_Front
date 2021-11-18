import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {F_Painting_Quotation} from "./painting-quotation.form";
import {Status} from "../../../../../models/enums/status.enum";
import {PaintingQuotationService} from "../../../../../services/painting-quotation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-painting-quotation-form',
  templateUrl: './painting-quotation-form.component.html',
  styleUrls: ['./painting-quotation-form.component.scss']
})
export class PaintingQuotationFormComponent implements OnInit {
  id?: number;

  updatePaintingQuotationForm: FormGroup = new FormGroup(F_Painting_Quotation);

  statusArray: Status[] = [
    Status.PENDING,
    Status.DONE,
    Status.ONGOING
  ]

  constructor(
    private paintingQuotationService: PaintingQuotationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.router.url.charAt(this.router.url.length - 1));

    this.paintingQuotationService.getOneById(this.id)
      .subscribe((data) => {
        this.updatePaintingQuotationForm.setValue({
          status: data.status,
          user: data.user,
          format: data.format,
          colorChoice: data.colorChoice,
          message: data.message,
          paintingTypeId: data.paintingType.id
        })
      })
  }

  submit(){
    const value = this.updatePaintingQuotationForm.value;
    this.paintingQuotationService.update(Number(this.router.url.charAt(this.router.url.length - 1)), value).subscribe();
    this.router.navigateByUrl('admin/painting/quotation');
  }

}
