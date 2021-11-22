import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../../../models/picture.model";
import {FormGroup} from "@angular/forms";
import {F_Picture} from "./picture.form";
import {PictureService} from "../../../../../services/picture.service";
import {PictureCategoryService} from "../../../../../services/picture-category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss']
})
export class PictureFormComponent implements OnInit {
  id: number = 0;
  picture?: Picture;
  pictureTypeArray: any[] = [];

  updatePictureForm: FormGroup = new FormGroup(F_Picture);

  constructor(
    private pictureService: PictureService,
    private pictureTypeService: PictureCategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pictureTypeService.getAll()
      .subscribe((data) => this.pictureTypeArray = data);

    let tab: string[] = this.router.url.split('/');
    this.id = Number(tab[tab.length - 1]);

    this.pictureService.getOneById(this.id)
      .subscribe((data) => {
        this.updatePictureForm.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          eventCategoryId: data.eventCategory.id,
          isAvailable: data.available // DTO not matching so use of available which is not defined
        });
      });
  }

  submit(){
    const value = this.updatePictureForm.value;
    this.pictureService.update(Number(this.id), value).subscribe();
    this.router.navigateByUrl('admin/picture/list');
  }

}
