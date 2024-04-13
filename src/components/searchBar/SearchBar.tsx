import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Search"
        className="px-6 py-3 w-full border border-gray-200 rounded-3xl focus:outline-none focus:bg-slate-200 bg-secondary hover:bg-slate-200"
      />
      <button className="relative flex items-center">
        <LuSearch size={22} className="absolute right-0 text-primary mr-6" />
      </button>
    </div>
  );
}
