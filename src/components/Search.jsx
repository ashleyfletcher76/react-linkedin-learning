import { BiSearch, BiCaretDown } from "react-icons/bi";

const Search = () => {
  return (
    <div className="py-5">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value=""
          className="block w-full rounded-md border-gray-300 pl-8 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="flex items-center justify-center border-2 border-blue-400 bg-blue-400 px-4 py-2 text-sm text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
