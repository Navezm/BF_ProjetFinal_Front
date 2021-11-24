import {PaintingType} from "./paintingType.model";

export interface Painting {
  id: number,
  name: string,
  src: string,
  description: string,
  price: number,
  isAvailable: boolean,
  paintingType: PaintingType
}
