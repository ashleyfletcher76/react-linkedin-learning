import { useState } from "react";
import { BiSearch, BiCaretDown } from "react-icons/bi";
import DropDown from "./Dropdown";

const Search = () => {
  let [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="py-2">
      <div className="mt-1 flex items-stretch rounded-md shadow-sm">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
          </div>
          <input
            type="text"
            name="query"
            id="query"
            value=""
            className="block h-10 w-full rounded-md border border-gray-300 pl-8 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search"
          />
        </div>

        <div className="relative">
          <button
            type="button"
            className="flex h-10 items-center justify-center rounded-md border-2 border-blue-400 bg-blue-400 px-4 text-sm text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={toggleDropdown}
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            Sort By <BiCaretDown className="ml-2" />
          </button>
          {toggleDropdown && (
            <div className="absolute right-0 mt-2">
              <DropDown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
