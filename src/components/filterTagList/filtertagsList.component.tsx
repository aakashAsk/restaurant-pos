import { FilterTag } from "@/src/interfaces/filtertag.interface";
import FilterTagComponent from "../filterTag/filtertag.component";
import Toggle from "../toggle/toggle.component";
import style from './style.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTags } from "@/src/redux/store/slices/filtertags"; // 👈 use correct action
import { getTagList } from "@/src/utility/tagUtils";
import { RootState } from "../../redux/store";
import { MenuPageApiResponse } from "@/src/interfaces/menuPageApiResponse.interface";

export default function FilterTagsList({ data }: { data: MenuPageApiResponse }) {
    const dispatch = useDispatch();
    const filterTags = useSelector(
        (state: RootState) => state.filterTags.filterTags
    );

    useEffect(() => {
        if (data) {
            let tagList = getTagList(data.categoriesWithMenus);
            // here you should update filterTags (not filters)
            dispatch(setFilterTags({ filterTags: tagList }));
        }
    }, [data, dispatch]);

    return (
        <div>
            <div className={`${style.filtertaglist} w-full flex gap-2`}>
                <div className="toggles flex w-[25%] gap-2 items-center">
                    {filterTags.map((tag: FilterTag, index: number) =>
                        tag.tagType === "type" ? (
                            <Toggle key={index} type={tag.name} />
                        ) : null
                    )}
                </div>
                <div className="filterTags flex w-[75%] gap-2 m-2">
                    {filterTags.map((tag: FilterTag, index: number) =>
                        tag.tagType === "tag" ? (
                            <FilterTagComponent key={index}>
                                {tag.name}
                            </FilterTagComponent>
                        ) : null
                    )}
                </div>
            </div>
            <hr className="border-t border-[rgba(2,6,12,0.15)]" />
        </div>
    );
}
