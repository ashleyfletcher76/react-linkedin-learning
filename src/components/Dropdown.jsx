import { BiCheck } from "react-icons/bi";

const DropDown = () => {
  return (
    <div className="ring-opacity-5 absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="flex cursor-pointer justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Pet Name <BiCheck />
        </div>
        <div
          className="flex cursor-pointer justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Owner Name <BiCheck />
        </div>
        <div
          className="flex cursor-pointer justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Date <BiCheck />
        </div>
        <div
          className="border-gray-1 flex cursor-pointer justify-between border-t-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Asc <BiCheck />
        </div>
        <div
          className="flex cursor-pointer justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Desc <BiCheck />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
