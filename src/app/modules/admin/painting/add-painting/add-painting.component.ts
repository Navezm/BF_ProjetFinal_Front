import { Component, OnInit } from '@angular/core';
import {PaintingTypeService} from "../../../../services/painting-type.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaintingService} from "../../../../services/painting.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss']
})
export class AddPaintingComponent implements OnInit {
  paintingTypeArray: any[] = [];
  selectedFile?: File;

  addPaintingForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  paintingTypeCtl: FormControl;
  paintingCtl: FormControl;

  constructor(
    private paintingTypeService: PaintingTypeService,
    private paintingService: PaintingService,
    private fb: FormBuilder,
    private http: HttpClient
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
    });
  }

  ngOnInit(): void {
    this.paintingTypeService.getAll()
      .subscribe((data) => this.paintingTypeArray = data);
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  submit(){
    this.http.post('http://localhost:4200/assets/img/painting', this.selectedFile)
      .subscribe();
  }

}
