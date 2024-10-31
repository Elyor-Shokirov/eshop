import React from "react";

function SearchBar() {
  return (
    <div className=" md:w-[500px]">
      <label
        htmlFor="search-bar"
        className="min-w-sm focus-within:none relative z-[90] flex max-w-4xl flex-row items-center justify-center gap-2  border  shadow-2xl md:flex-row">
        <input
          id="search-bar"
          className="input w-full flex-1 rounded-md px-6 py-2 outline-none focus-within:border-white"
        />

        <button
          className="btn mx-auto rounded-none h-[50px] w-[150px] truncate whitespace-nowrap  bg-[#f1970a] text-sm font-semibold text-white"
          type="submit">
          Search
        </button>
      </label>
    </div>
  );
}

export default SearchBar;
