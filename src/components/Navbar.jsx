import React from "react";
import { Link } from "react-router-dom";
import { RxAvatar, MdOutlineDarkMode, BsSun } from "react-icons/all";
import { useTheme } from "../context/useContextHooks";

function Navbar() {
  const { mode, changeMode } = useTheme();
  return (
    <div className="py-[20px]  mx-auto px-[40px] dark:bg-slate-800">
      <div className="flex items-center justify-between w-[1050px] mx-auto">
        <Link
          to={`/`}
          className="flex items-center justify-center gap-[0.5rem] dark:text-white"
        >
          <span style={{}} className="text-[48px] cursor-pointer">
            <RxAvatar />
          </span>
          <span className="text-[30px]">USER</span>
        </Link>
        <div className="text-[48px] cursor-pointer dark:text-white">
          {mode === "light" && (
            <MdOutlineDarkMode
              onClick={() => {
                changeMode("dark");
              }}
            />
          )}
          {mode === "dark" && (
            <BsSun
              onClick={() => {
                changeMode("light");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
