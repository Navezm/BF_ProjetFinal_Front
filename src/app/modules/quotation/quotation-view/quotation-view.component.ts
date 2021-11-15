import {Component, OnInit} from '@angular/core';
import {Format} from "../../../models/enums/format.enum";
import {ColorChoice} from "../../../models/enums/colorChoice.enum";
import {PaintingTypeService} from "../../../services/painting-type.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaintingQuotation} from "../../../models/paintingQuotation.model";
import {PaintingQuotationService} from "../../../services/painting-quotation.service";
import {Status} from "../../../models/enums/status.enum";
import {User} from "../../../models/user.model";
import {PaintingType} from "../../../models/paintingType.model";

@Component({
  selector: 'app-quotation-view',
  templateUrl: './quotation-view.component.html',
  styleUrls: ['./quotation-view.component.scss']
})
export class QuotationViewComponent implements OnInit {

  /**
   * Values for the form
   */
  formatArray: string[] = [
    Format.BIG,
    Format.LARGE,
    Format.MEDIUM,
    Format.SMALL
  ];

  colorChoiceArray: string[] = [
    ColorChoice.MIX1,
    ColorChoice.MIX2,
    ColorChoice.MIX3,
    ColorChoice.MIX4
  ]

  paintingTypeArray: any[] = [];

  /**
   * Declaration of the form
   */
  quotationForm: FormGroup;
  formatCtl: FormControl;
  colorCtl: FormControl;
  paintingTypeCtl: FormControl;
  messageCtl: FormControl;


  constructor(
    private paintingTypeService: PaintingTypeService,
    private fb: FormBuilder,
    private paintingQuotationService: PaintingQuotationService
  ) {
    this.colorCtl = this.fb.control(null, [Validators.required]);
    this.formatCtl = this.fb.control(null, [Validators.required]);
    this.paintingTypeCtl = this.fb.control(null, [Validators.required]);
    this.messageCtl = this.fb.control(null, [Validators.required]);

    this.quotationForm = this.fb.group({
      colorChoice: this.colorCtl,
      format: this.formatCtl,
      paintingType: this.paintingTypeCtl,
      message: this.messageCtl
    })
  }

  ngOnInit(): void {
    this.paintingTypeService.getAll()
      .subscribe((data) =>
        data.forEach((x) => this.paintingTypeArray.push(x))
      );
  }

  submit(quotationForm: FormGroup){
    const quotation = quotationForm.value as PaintingQuotation;

    quotation.status = Status.PENDING;
    quotation.user = JSON.parse(<string>localStorage.getItem('user')) as User;

    console.log(quotation);
    this.paintingQuotationService.insert(quotation).subscribe((data) => console.log(data));
  }

}
