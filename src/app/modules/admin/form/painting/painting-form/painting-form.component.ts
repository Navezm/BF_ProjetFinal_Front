import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaintingService} from "../../../../../services/painting.service";
import {PaintingTypeService} from "../../../../../services/painting-type.service";
import {Painting} from "../../../../../models/painting.model";
import {Router} from "@angular/router";
import {F_Painting} from "./painting.form";

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent implements OnInit {
  id?: number;
  painting?: Painting;
  paintingTypeArray: any[] = [];

  updatePaintingForm: FormGroup = new FormGroup(F_Painting);

  constructor(
    private paintingService: PaintingService,
    private paintingTypeService: PaintingTypeService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.paintingTypeService.getAll()
      .subscribe((data) => this.paintingTypeArray = data);

    this.id = Number(this.router.url.charAt(this.router.url.length - 1));

    this.paintingService.getOneById(this.id)
      .subscribe((data) => {
        this.updatePaintingForm.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          paintingTypeId: data.paintingType.id,
          isAvailable: data.available // DTO not matching so use of available which is not defined
        })
      });
  }

  submit(){
    const value = this.updatePaintingForm.value;
    this.paintingService.update(Number(this.router.url.charAt(this.router.url.length - 1)), value).subscribe();
    this.router.navigateByUrl('admin/painting/list');
  }

}
