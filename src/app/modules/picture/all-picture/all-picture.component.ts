import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture.model";
import {PictureService} from "../../../services/picture.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-all-picture',
  templateUrl: './all-picture.component.html',
  styleUrls: ['./all-picture.component.scss']
})
export class AllPictureComponent implements OnInit {
  pictureList!: Picture[];
  backPicture: ImageBitmap;
  unsafeImageUrl;
  imageUrl;

  constructor(
    private pictureService: PictureService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getAll();
    // this.getBack();
  }

  private getAll(){
    this.pictureService.getAll()
      .subscribe((pictures: Picture[]) => {
        this.pictureList = pictures;
      })
  }

  private getBack(){
    this.pictureService.getPictureBack()
      .subscribe((data) => {
        console.log("HELLO")
        let dataBlob = [{"image_blob": {"type":"img/jpg", "data":data}}]
        //let blob1 = new Blob([new Uint8Array(data)]);
        this.unsafeImageUrl = URL.createObjectURL(data);
        console.log(this.unsafeImageUrl)
        this.imageUrl = this.unsafeImageUrl;


        // this.backPicture = data as ImageBitmap
        // console.log(data)
      }, (err) => console.log(err));
  }
}
