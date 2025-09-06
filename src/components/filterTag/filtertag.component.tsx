'use client'
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/store/slices/categoryWithMenus";
import { AppDispatch } from "@/src/redux/store";

export default function FilterTag({ children }: { children: ReactNode }) {
    let [toggle, setToggle] = useState(false);
    let [activeFilters, setActiveFilters] = useState([]);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        let tags = [];
        if (!toggle) {
            tags.push(children);
            dispatch(setFilters({ tags, action:"add" }));
        }
        else {
            dispatch(setFilters({ tags: [children], action:"remove" }));
        }
        setToggle(!toggle);
    }
    return (
        <div onClick={handleClick} className={`whitespace-nowrap w-max rounded-full text-sm font-medium text-gray-700 shadow-[0px_2px_12px_rgba(2,6,12,0.04)] border border-[rgba(2,6,12,0.15)] px-3 py-2 font-normal text-[rgba(2,6,12,0.75)] flex items-center gap-2 ${toggle ? `bg-grey-200` : ''}`}>
            {children}
            {
                toggle ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 56.326 56.326">
                    <path id="Path_14" data-name="Path 14" d="M477.613,422.087l25.6-25.6a1.5,1.5,0,0,0-2.122-2.121l-25.6,25.6-25.6-25.6a1.5,1.5,0,1,0-2.121,2.121l25.6,25.6-25.6,25.6a1.5,1.5,0,0,0,2.121,2.122l25.6-25.6,25.6,25.6a1.5,1.5,0,0,0,2.122-2.122Z" transform="translate(-447.328 -393.924)" fill="#000" />
                </svg> : ""
            }
        </div>
    )
}