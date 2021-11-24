import {Address} from "./address.model";
import {Role} from "./role.model";
import {Group} from "./group.model";

export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  roles: Array<Role>;
  group: Group;
  address: Address;
  token?: string;
}
