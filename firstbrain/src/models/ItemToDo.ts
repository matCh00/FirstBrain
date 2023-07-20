import { Item } from "./Item";

export interface ItemToDo extends Item {
  priority: string,
  link?: string,
}