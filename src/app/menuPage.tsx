'use client'
import Search from "../components/search/search.component";
import FilterTagsList from "../components/filterTagList/filtertagsList.component";
import Collapse from "../components/collapsible/collapse.component";
import FoodItem from "../components/foodItem/item.component";
import Footer from "../components/footer/footer.component";
import ToolTip from "../components/tooltip/tooltip.component";
import { MenuPageApiResponse } from "../interfaces/menuPageApiResponse.interface";
import { Category } from "../interfaces/category.interface";
import { Menu } from "../interfaces/menu.interface";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesWithMenus } from "../redux/store/slices/categoryWithMenus";
import { setFilterTags } from "../redux/store/slices/filtertags";
import { FilterTag } from "../interfaces/filtertag.interface";
import { getTagList } from "../utility/tagUtils";

export default function MenuPage({ data }: { data: MenuPageApiResponse }) {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.categoryMenu.filteredCategories
  );
  // hydrate redux store with SSR data
  useEffect(() => {
    if (data) {
      dispatch(setCategoriesWithMenus({ categoriesWithMenus: data.categoriesWithMenus }));
      let tagList = getTagList(data.categoriesWithMenus);
      dispatch(setFilterTags({ filterTags: tagList }));
    }
  }, [data, dispatch]);
  return (
    <div className="max-w-xl w-[100%] m-auto">
      <Search />
      <FilterTagsList data={data} />
      <div>
        {
          categories.map((category: Category, index: number) => {
            return (
              <Collapse key={index} title={category.name} noOfItem={category.menusCount} collapse={true}>
                {
                  category.menus.map((menuItem: Menu, index: number) => {
                    return <FoodItem data={menuItem} key={index}></FoodItem>
                  })
                }
              </Collapse>
            )
          })
        }
      </div>
      <Footer></Footer>
      <ToolTip />
    </div>
  );
}
