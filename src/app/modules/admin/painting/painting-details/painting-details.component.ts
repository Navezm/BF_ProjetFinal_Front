import { Component, OnInit } from '@angular/core';
import {Painting} from "../../../../models/painting.model";
import {PaintingService} from "../../../../services/painting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.scss']
})
export class PaintingDetailsComponent implements OnInit {
  painting!: Painting;

  constructor(
    private paintingService: PaintingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paintingService.getOneById(Number(this.router.url.charAt(this.router.url.length - 1)))
      .subscribe((painting) => this.painting = painting);
  }

  delete(id: number){
    this.paintingService.delete(id).subscribe();
    this.router.navigateByUrl("admin/painting/list");
  }

}
