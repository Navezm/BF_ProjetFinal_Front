import { Component, OnInit } from '@angular/core';
import {PaintingTypeService} from "../../../../services/painting-type.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss']
})
export class AddPaintingComponent implements OnInit {
  paintingTypeArray: any[] = [];

  addPaintingForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  paintingTypeCtl: FormControl;
  paintingCtl: FormControl;

  constructor(
    private paintingTypeService: PaintingTypeService,
    private fb: FormBuilder
  ) {
    this.nameCtl = this.fb.control(null, [Validators.required]);
    this.descriptionCtl = this.fb.control(null, [Validators.required]);
    this.priceCtl = this.fb.control(null, [Validators.required]);
    this.paintingTypeCtl = this.fb.control(null, [Validators.required]);
    this.paintingCtl = this.fb.control(null, [Validators.required]);

    this.addPaintingForm = this.fb.group({
      name: this.nameCtl,
      description: this.descriptionCtl,
      price: this.priceCtl,
      paintingTypeId: this.paintingTypeCtl
    })
  }

  ngOnInit(): void {
    this.paintingTypeService.getAll()
      .subscribe((data) => this.paintingTypeArray = data);
  }

}
