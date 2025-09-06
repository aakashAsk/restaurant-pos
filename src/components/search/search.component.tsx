export default function Search() {
    return <div className="flex items-center max-w-[600px] w-full bg-gray-100 rounded-lg px-4 py-3">
  <input 
    type="text" 
    placeholder="Search for dishes"
    className="flex-1 bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none"
  />
  <svg xmlns="http://www.w3.org/2000/svg" 
       className="h-5 w-5 text-gray-500 ml-2" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
  </svg>
</div>

}