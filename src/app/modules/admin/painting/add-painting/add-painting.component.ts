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
  fileName: string = "";

  addPaintingForm: FormGroup;
  nameCtl: FormControl;
  descriptionCtl: FormControl;
  priceCtl: FormControl;
  paintingTypeCtl: FormControl;

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
  //
  // onUploadFile(event: any){
  //   console.log(event.target.files[0]);
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file, file.name);
  //   this.fileName = file.name;
  //   this.paintingService.upload(formData).subscribe();
  // }

  onUploadFile(event: any){
    const files = event.target.files;
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name) }
    this.paintingService.upload(formData).subscribe(
      event => {
        console.log(event);
      }
    );
  }

  submit(){
    const values = this.addPaintingForm.value;
    this.paintingService.insert(values).subscribe();
  }

}
