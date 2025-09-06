import { Category } from "./category.interface";
import { FilterTag } from "./filtertag.interface";

export interface MenuPageApiResponse {
  success: boolean;
  categoriesWithMenus: Category[];
  filterTags: FilterTag[]
}
