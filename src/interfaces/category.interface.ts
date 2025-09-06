import { Menu } from "./menu.interface";

export interface Category {
  _id: string;
  name: string;
  description: string;
  menus: Menu[];
  menusCount: number;
}