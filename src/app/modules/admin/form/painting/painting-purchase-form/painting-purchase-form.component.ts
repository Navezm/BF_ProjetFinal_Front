import {Component, OnInit} from '@angular/core';
import {PaintingPurchase} from "../../../../../models/paintingPurchase.model";
import {Status} from "../../../../../models/enums/status.enum";
import {PaintingPurchaseService} from "../../../../../services/painting-purchase.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {F_Painting_Purchase} from "./painting-purchase.form";

@Component({
  selector: 'app-painting-purchase-form',
  templateUrl: './painting-purchase-form.component.html',
  styleUrls: ['./painting-purchase-form.component.scss']
})
export class PaintingPurchaseFormComponent implements OnInit {
  id: number = 0;

  updatePaintingPurchaseForm: FormGroup = new FormGroup(F_Painting_Purchase);

  statusArray: Status[] = [
    Status.PENDING,
    Status.DONE,
    Status.ONGOING
  ]

  constructor(
    private paintingPurchaseService: PaintingPurchaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tab: string[] = this.router.url.split('/');
    this.id = Number(tab[tab.length - 1]);

    this.paintingPurchaseService.getOneById(this.id)
      .subscribe((data) => {
        this.updatePaintingPurchaseForm.setValue({
          status: data.status,
          user: data.user,
          paintings: data.paintings,
          address: data.address
        });
      });
  }

  submit(){
    const value = this.updatePaintingPurchaseForm.value;
    this.paintingPurchaseService.update(Number(this.id), value).subscribe();
    this.router.navigateByUrl('admin/painting/purchase');
  }

}
