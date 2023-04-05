import React from "react";
import { MdRefresh, AiOutlineClear } from "react-icons/all";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";
function Search({ setSearch, refresh, setRefresh, newData, setNewData }) {
  return (
    <div>
      <form className="flex items-center mb-[60px]">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-[#cda274] dark:text-[#cda274]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="  border border-t-0 border-r-0 border-l-0 border-[#cda274] text-[#cda274] font-[500]    pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   w-[400px] placeholder:text-[#cda274] text-[20px]"
            placeholder="Live search user"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="p-2.5 ml-2 text-[19px] font-medium text-white bg-[#cda274] rounded-lg border border-[#cda274] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-1"
          onClick={() => setRefresh(!refresh)}
        >
          <span>
            <MdRefresh />
          </span>
          <span>Refresh</span>
        </button>
        {newData && newData.length !== 0 && (
          <button
            type="button"
            className="p-2.5 ml-2 text-[19px] font-medium text-white bg-[#cda274] rounded-lg border border-[#cda274] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-1 "
            onClick={() => setNewData([])}
          >
            <span>
              <AiOutlineClear />
            </span>
            <span>Clear</span>
          </button>
        )}
      </form>
    </div>
  );
}

export default Search;
