import {User} from "./user.model";
import {Painting} from "./painting.model";
import {Address} from "./address.model";
import {Status} from "./enums/status.enum";

export interface PaintingPurchase {
  id?: number,
  status: Status,
  user: User,
  paintings: Array<Painting>,
  address: Address
}
