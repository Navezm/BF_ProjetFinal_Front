import { Component, OnInit } from '@angular/core';
import {EventCategory} from "../../../../models/eventCategory.model";
import {PictureCategoryService} from "../../../../services/picture-category.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent implements OnInit {
  pictureTypeArray!: EventCategory[];

  addPictureForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  pictureTypeCtl: FormControl;
  pictureCtl: FormControl;

  constructor(
    private pictureTypeService: PictureCategoryService,
    private fb: FormBuilder
  ) {
    this.nameCtl = this.fb.control(null, [Validators.required]);
    this.descriptionCtl = this.fb.control(null, [Validators.required]);
    this.priceCtl = this.fb.control(null, [Validators.required]);
    this.pictureTypeCtl = this.fb.control(null, [Validators.required]);
    this.pictureCtl = this.fb.control(null, [Validators.required]);

    this.addPictureForm = this.fb.group({
      name: this.nameCtl,
      description: this.descriptionCtl,
      price: this.priceCtl,
      paintingTypeId: this.pictureTypeCtl
    });
  }

  ngOnInit(): void {
    this.pictureTypeService.getAll()
      .subscribe((data) => this.pictureTypeArray = data);
  }

}
