import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaintingService} from "../../../../../services/painting.service";
import {PaintingTypeService} from "../../../../../services/painting-type.service";
import {Painting} from "../../../../../models/painting.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent implements OnInit {
  id!: number;
  painting!: Painting;
  paintingTypeArray: any[] = [];

  updatePaintingForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  paintingTypeCtl: FormControl;

  constructor(
    private paintingService: PaintingService,
    private paintingTypeService: PaintingTypeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.nameCtl = this.fb.control(null, [Validators.required]);
    this.descriptionCtl = this.fb.control(null, [Validators.required]);
    this.priceCtl = this.fb.control(null, [Validators.required]);
    this.paintingTypeCtl = this.fb.control(null, [Validators.required]);

    this.updatePaintingForm = this.fb.group({
      name: this.nameCtl,
      description: this.descriptionCtl,
      price: this.priceCtl,
      paintingTypeId: this.paintingTypeCtl
    });
  }

  ngOnInit(): void {
    this.paintingTypeService.getAll()
      .subscribe((data) => this.paintingTypeArray = data);

    this.id = Number(this.router.url.charAt(this.router.url.length - 1));

    this.paintingService.getOneById(this.id)
      .subscribe((data) => this.painting = data);
  }

  submit(){

  }

}
