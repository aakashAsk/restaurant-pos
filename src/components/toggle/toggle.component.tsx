'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/store/slices/categoryWithMenus";
import { AppDispatch } from "@/src/redux/store";

export default function Toggle({ type }: { type: String }) {
  const [on, setOn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const isVeg = type === "veg" || type === "Veg" || type === "VEG";
  const bgcolor = isVeg ? "veg-bg-color" : "non-veg-bg-color";
  const textColor = isVeg ? "veg-color" : "non-veg-color";
  const toggleHandle = () => {
    if (!on) {
      dispatch(setFilters({ type: [type], action: "add" }));
    }
    else {
      dispatch(setFilters({ type: [type], action: "remove" }));
    }
    setOn(!on);

  }
  return (
    <div
      onClick={toggleHandle}
      className="w-[30px] h-2 flex items-center bg-gray-300 rounded-full cursor-pointer transition"
    >
      {/* Thumb */}
      <div
        className={`w-4 h-4 flex items-center justify-center rounded-sm shadow-md transform transition
          ${on ? `translate-x-full ${bgcolor}` : "translate-x-0 bg-white"}`}
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 ${on ? "text-white" : `${textColor}`}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 4l-8 16h16L12 4z" />
        </svg>
      </div>
    </div>
  );
}

