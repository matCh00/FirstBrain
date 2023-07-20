import { Item } from "./Item";

export interface ItemStudia extends Item {
  deadline: Date,
  link?: string,
  image?: string,
}