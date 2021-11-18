import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {F_Picture_Purchase} from "./picture-purchase.form";
import {Status} from "../../../../../models/enums/status.enum";
import {PicturePurchaseService} from "../../../../../services/picture-purchase.service";
import {Router} from "@angular/router";
import {UtilService} from "../../../../../services/util.service";

@Component({
  selector: 'app-picture-purchase-form',
  templateUrl: './picture-purchase-form.component.html',
  styleUrls: ['./picture-purchase-form.component.scss']
})
export class PicturePurchaseFormComponent implements OnInit {
  id?: number;

  updatePicturePurchaseForm: FormGroup = new FormGroup(F_Picture_Purchase);

  statusArray: Status[] = [
    Status.PENDING,
    Status.DONE,
    Status.ONGOING
  ]

  constructor(
    private picturePurchaseService: PicturePurchaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.router.url.charAt(this.router.url.length - 1));

    this.picturePurchaseService.getOneById(this.id)
      .subscribe((data) => {
        this.updatePicturePurchaseForm.setValue({
          status: data.status,
          user: data.user,
          pictures: data.pictures
        });
      });
  }

  submit(){
    const value =this.updatePicturePurchaseForm.value;
    this.picturePurchaseService.update(Number(this.router.url.charAt(this.router.url.length - 1)), value).subscribe();
    this.router.navigateByUrl('admin/picture/purchase');
  }

}