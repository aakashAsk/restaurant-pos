import { Category } from "../interfaces/category.interface";
import { FilterTag } from "../interfaces/filtertag.interface";

export function getTagList(categories: Category[]): FilterTag[] {
  const tagCountMap = new Map<string, { count: number; type: string }>();

  categories.forEach(category => {
    category.menus.forEach(menu => {
      const typeLower = menu.type.toLowerCase();
      const tagTypeForMenu = typeLower === 'veg' || typeLower === 'non-veg' ? "type" : 'tag';

      if (!tagCountMap.has(menu.type)) {
        tagCountMap.set(menu.type, { count: 1, type: tagTypeForMenu });
      } else {
        tagCountMap.get(menu.type)!.count += 1;
      }

      menu.tags?.forEach(tag => {
        const tagLower = tag.toLowerCase();
        const tagTypeForTag = tagLower === 'veg' || tagLower === 'non-veg' ? "type" : 'tag';

        if (!tagCountMap.has(tag)) {
          tagCountMap.set(tag, { count: 1, type: tagTypeForTag });
        } else {
          tagCountMap.get(tag)!.count += 1;
        }
      });
    });
  });

  const tagList: FilterTag[] = Array.from(tagCountMap, ([name, { count, type }]) => ({
    name,
    count,
    tagType: type,
  }));

  const order = ['veg', 'non-veg', 'other'];
  tagList.sort((a, b) => order.indexOf(a.tagType) - order.indexOf(b.tagType));

  return tagList;
}