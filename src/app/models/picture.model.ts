import {EventCategory} from "./eventCategory.model";

export interface Picture {
  id: number,
  name: string,
  src: string,
  description: string,
  price: number,
  isAvailable: boolean,
  eventCategory: EventCategory
}
