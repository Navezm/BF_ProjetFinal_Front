import {Component, Input, OnInit} from '@angular/core';
import {Painting} from "../../../models/painting.model";
import {Picture} from "../../../models/picture.model";
import {Router} from "@angular/router";
import {PicturePurchaseService} from "../../../services/picture-purchase.service";
import {PaintingPurchaseService} from "../../../services/painting-purchase.service";
import {PaintingPurchase} from "../../../models/paintingPurchase.model";
import {Status} from "../../../models/enums/status.enum";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() items = new Array<any>();

  constructor(
    private router: Router,
    private picturePurchaseService: PicturePurchaseService,
    private paintingPurchaseService: PaintingPurchaseService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  get total(): number{
    let total = 0;

    for(let item of this.items){
      total += item.price;
    }

    return total;
  }

  sendPurchase(items: any[]){
    console.log(items);
    if(this.router.url.includes("painting")){
      this.sendPaintingPurchase(items);
    } else {
      this.sendPicturePurchase(items);
    }
  }

  sendPaintingPurchase(items: Painting[]){
    let user: User = JSON.parse(<string>localStorage.getItem('user')) as User;
    // let user: User;
    // console.log(localUser)
    // if (localUser.id != null) {
    //   this.userService.getOneById(localUser.id).subscribe((userOptional: User) => user = userOptional);
    // } else {
    //   user = localUser
    // }



    console.log(user)

    let panier: PaintingPurchase = {
      status: Status.PENDING,
      paintings: items,
      user: user,
      address: user.address
    }
    console.log(panier);

    this.paintingPurchaseService.insert(panier).subscribe((data: PaintingPurchase) => console.log(data));
  }

  sendPicturePurchase(items: Picture[]){

  }

}
