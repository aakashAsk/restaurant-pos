'use client'
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex items-center justify-center absolute -bottom-4">
      <div className="w-[80%]">
        <div className="relative h-8 flex items-center justify-center overflow-hidden rounded-md bg-white text-green-600 font-semibold box-shadow border-gray">
          {/* ADD content */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform
              ${count !== 0 ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
            `}
          >
            <button
              className="w-full cursor-pointer px-6 py-1 text-primary"
              onClick={() => setCount(1)}
            >
              ADD
            </button>
          </div>

          {/* Counter content */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 transform
              ${count !== 0 ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
          >
            <button onClick={() => setCount(count - 1)} className="text-xl">-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} className="text-xl">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
