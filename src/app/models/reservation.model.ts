import {Status} from "./enums/status.enum";
import {User} from "./user.model";
import {EventCategory} from "./eventCategory.model";

export interface Reservation {
  id: number,
  status: Status,
  user: User,
  startDate: Date,
  endDate: Date,
  eventCategory: EventCategory
}
