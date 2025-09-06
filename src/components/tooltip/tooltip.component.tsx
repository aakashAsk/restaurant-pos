
export default function ToolTip() {
    return (
        <button className="w-[100%] fixed max-w-xl m-auto bottom-0">
            <div className="flex justify-between items-center bg-green-600 text-white px-6 py-3">
                <span className="font-semibold">1 item added</span>

                <div className="flex items-center gap-2 font-bold">
                    VIEW CART
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1.5 10.5a2 2 0 01-2 1.5H8.5a2 2 0 01-2-1.5L5 9z" />
                    </svg>
                </div>
            </div>

        </button>
    )
}