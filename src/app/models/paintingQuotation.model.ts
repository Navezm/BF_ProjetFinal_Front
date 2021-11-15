import {Status} from "./enums/status.enum";
import {User} from "./user.model";
import {PaintingType} from "./paintingType.model";
import {Format} from "./enums/format.enum";
import {ColorChoice} from "./enums/colorChoice.enum";

export interface PaintingQuotation {
  id: number,
  status: Status,
  user: User,
  format: Format,
  colorChoice: ColorChoice,
  message: string,
  paintingType: number
}
