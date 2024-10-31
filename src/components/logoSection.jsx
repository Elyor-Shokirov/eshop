import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

function LogoSection() {
  return (
    <div className="m-auto max-w-[1440px] mt-7 ">
      <div className="flex gap-36">
        <Link to="/">
          <img className="w-[140px] h-full" src="/img/logo-1.png" alt="" />
        </Link>

        <div className="md:ml-36 hidden md:block">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
