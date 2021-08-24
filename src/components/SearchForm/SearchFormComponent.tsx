import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { ISearchFormProps } from "../../types.ds";

export const SearchFormComponent: React.FC<ISearchFormProps> = ({
  handleOnChange,
  str,
}) => {
  console.log(str);
  return (
    <div className="p-8 w-1/3">
      <div className="bg-white flex items-center rounded-full shadow-xl border border-gray-300 ">
        <div className="floating-input relative w-full ">
          <input
            className="rounded-r-full w-full  px-6 text-gray-700 leading-tight focus:outline-none text-2xl"
            id="search"
            type="text"
            placeholder=" "
            onChange={handleOnChange}
            autoComplete="off"
          />

          <label
            htmlFor="subject"
            className="absolute top-0 right-0 px-4 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-xl"
          >
            جست و جو کن
          </label>
        </div>

        <div className="p-4">
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <SearchIcon className="block w-8 h-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
