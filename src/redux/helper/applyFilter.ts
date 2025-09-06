import { Category } from "@/src/interfaces/category.interface";

type Filters = { type?: string[]; tags?: string[] };

export function applyFilters(categories: Category[], filters: Filters): Category[] {
  const typeSelected = !!filters.type && filters.type.length > 0;
  const tagsSelected = !!filters.tags && filters.tags.length > 0;

  return categories
    .map(category => {
      const filteredMenus = category.menus.filter(menu => {
        const typeMatch =
          !typeSelected || (menu.type && filters.type!.some(t => menu.type === t));

        const tagsMatch =
          !tagsSelected || (menu.tags && filters.tags!.some(t => menu.tags!.includes(t)));

        // if both selected -> both must be true; if only one selected -> that one must be true
        return typeMatch && tagsMatch;
      });

      return {
        ...category,
        menus: filteredMenus,
        menusCount: filteredMenus.length,
      };
    })
    .filter(category => category.menus.length > 0);
}
