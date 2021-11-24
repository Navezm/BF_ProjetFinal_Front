import {Role} from "./role.model";

export interface Group {
  id?: number;
  name: string;
  roles: Array<Role>;
}
