'use client'
import { useState } from "react";
import Button from "../button/button.component";
import { Menu } from "@/src/interfaces/menu.interface";

export default function FoodItem({ data }: { data: Menu }) {
    const [expanded, setExpanded] = useState(false);
    const isVeg = data.type === "veg" || data.type === "Veg" || data.type === "VEG";
    const color = isVeg ? "green" : "red";
    return (
        <div className="flex justify-between items-start border-b border-[rgba(2,6,12,0.15)] py-4">
            {/* Left section */}
            <div className="flex-1 pr-4">
                {/* Badge */}
                <div className="flex items-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 200 200">
                            <rect x="5" y="5" width="190" height="190" stroke={color} fill="white" strokeWidth="5" />

                            <circle cx="100" cy="100" r="60" fill={color} />
                        </svg>
                    </div>
                    {
                        data.tags.map((tag, index: number) => {
                            return (
                                <div key={index} className="inline-block rounded-full text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2 py-0.5">
                                    {tag}
                                </div>
                            )
                        })
                    }
                </div>

                {/* Title & Price */}
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <p className="text-base mt-1 font-bold">₹{data.price}</p>

                {/* Rating */}
                <div className="flex items-center text-sm text-green-600 mt-1 font-bold text-xs">
                    <span className="mr-1">★</span> 4.2
                    <span className="text-gray-500 ml-1 ">(3.5K+)</span>
                </div>

                {/* Description */}
                <p onClick={() => setExpanded(!expanded)} className={`text-sm text-gray-700 mt-2 ${expanded ? "" : "line-clamp-2"}`}>
                    {data.description}
                </p>
            </div>

            {/* Right section (image + button) */}
            <div className="flex flex-col items-center relative">
                <img
                    src={data.images[0]}
                    alt={data.title}
                    className="w-28 h-24 object-cover rounded-xl"
                />

                {/* Add button */}
                <Button />
                {/* <p className="text-xs text-gray-500 mt-1">Customisable</p> */}
            </div>
        </div>
    )
}