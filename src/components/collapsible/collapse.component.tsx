'use client'
import { ReactNode, useState } from "react";

export default function Collapse({ children, collapse=false, title, noOfItem }: { children: ReactNode, collapse?: boolean, title: string, noOfItem: number }) {
    const [isOpen, setIsOpen] = useState(collapse);
    return (
        <div className="w-full border-[rgba(2,6,12,0.15)]">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-2 py-3"
      >
        <span className="font-semibold">
          {title} <span className="font-normal font-semibold">({noOfItem})</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className={isOpen ? "transform transition-transform duration-500 rotate-0" : 'transform transition-transform duration-500 rotate-180'} width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/>
        </svg>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="px-2 py-3 text-sm text-gray-700">
          {children}
        </div>
      )}
    </div>
    )
}