export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 px-6 py-10 ">
            {/* Top Section */}
            <div className="flex items-center space-x-3">
                {/* FSSAI Logo (text style placeholder) */}
                <span className="italic font-serif text-2xl text-gray-500">fssai</span>
                {/* License Number */}
                <span className="text-sm">License No. 11519037000810</span>
            </div>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Restaurant Info */}
            <div className="mt-2">
                <h2 className="font-semibold text-gray-800">Burger King</h2>
                <p className="text-sm text-gray-600">(Outlet:Rahatani)</p>
            </div>

            {/* Address Section */}
            <div className="flex items-start space-x-2 mt-2 text-sm text-gray-600">
                {/* Location Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mt-0.5 text-gray-500"
                >
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                </svg>
                <p>
                    Shop 1B, Ground Floor, Rainbow Plaza, Pimple Saudagar, Pune 411027
                </p>
            </div>
        </footer>
    )
}