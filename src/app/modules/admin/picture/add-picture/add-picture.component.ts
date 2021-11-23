import { Component, OnInit } from '@angular/core';
import {EventCategory} from "../../../../models/eventCategory.model";
import {PictureCategoryService} from "../../../../services/picture-category.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PictureService} from "../../../../services/picture.service";

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent implements OnInit {
  pictureTypeArray: EventCategory[] = [];
  fileName: string = "";

  addPictureForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  pictureTypeCtl: FormControl;
  srcCtl: FormControl;

  constructor(
    private pictureTypeService: PictureCategoryService,
    private pictureService: PictureService,
    private fb: FormBuilder
  ) {
    this.nameCtl = this.fb.control(null, [Validators.required]);
    this.descriptionCtl = this.fb.control(null, [Validators.required]);
    this.priceCtl = this.fb.control(null, [Validators.required]);
    this.pictureTypeCtl = this.fb.control(null, [Validators.required]);
    this.srcCtl = this.fb.control(null, [Validators.required]);

    this.addPictureForm = this.fb.group({
      name: this.nameCtl,
      description: this.descriptionCtl,
      price: this.priceCtl,
      eventCategoryId: this.pictureTypeCtl,
      isAvailable: true,
      src: this.srcCtl
    });
  }

  ngOnInit(): void {
    this.pictureTypeService.getAll()
      .subscribe((data) => this.pictureTypeArray = data);
  }

  onUploadFile(event: any){
    const files = event.target.files;
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name);
      this.fileName = file.name;
    }
    this.pictureService.upload(formData).subscribe(
      event => {
        console.log(event);
      }
    );
  }

  submit(){
    // this.addPictureForm.value.src = this.fileName;
    const values = this.addPictureForm.value;
    this.pictureService.insert(values).subscribe();

    this.addPictureDone();
  }

  addPictureDone(){
    let divOrder = document.getElementById('divOrderDone');
    // @ts-ignore
    divOrder.style.display = 'block';

    this.addPictureForm.reset();
  }

}
