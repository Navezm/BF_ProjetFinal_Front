import {Address} from "./address.model";
import {Role} from "./role.model";

export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  roles?: Array<Role>;
  address: Address;
  token?: string;
}
