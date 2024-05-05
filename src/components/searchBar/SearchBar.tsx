import { LuSearch } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchProducts } from "../../slices/productsSlice";

export default function SearchBar() {
  const [searched, setSearched] = useState<string>("");
  const dispatch = useDispatch();

  const search = (searched: string) => {
    dispatch(searchProducts(searched));
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearched(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            search(searched);
          }
        }}
        className="px-6 py-2.5 w-full border border-gray-200 rounded-3xl focus:outline-none focus:bg-slate-200 bg-secondary transition-colors hover:opacity-90"
      />
      <button className="relative flex items-center" onClick={() => search(searched)}>
        <LuSearch size={22} className="absolute right-0 text-tertiary mr-6" />
      </button>
    </div>
  );
}
