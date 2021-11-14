import {Status} from "./enums/status.enum";
import {User} from "./user.model";
import {Picture} from "./picture.model";

export interface PicturePurchase {
  id?: number,
  status: Status,
  user: User,
  pictures: Array<Picture>
}
