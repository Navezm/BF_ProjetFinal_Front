import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../../models/picture.model";
import {PictureService} from "../../../../services/picture.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.scss']
})
export class PictureDetailsComponent implements OnInit {
  picture!: Picture;

  constructor(
    private pictureService: PictureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tab: string[] = this.router.url.split('/');
    this.pictureService.getOneById(Number(tab[tab.length - 1]))
      .subscribe((picture) => this.picture = picture);
  }

  delete(id: number){
    this.pictureService.delete(id).subscribe();
    this.router.navigateByUrl("admin/picture/list");
  }
}
