import React from "react";
import {
  FaPhone,
  FaPhoneAlt,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#523d7b]">
      <div className="m-auto max-w-[1440px] ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Parent</p>
                  <ul className="p-2">
                    <li>
                      <p>Submenu 1</p>
                    </li>
                    <li>
                      <p>Submenu 2</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Item 3</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-between gap-3">
              <span>
                <FaPhoneAlt className="text-white" />
              </span>
              <p className="font-monserat text-white font-bold">
                +358468905026
              </p>
            </div>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <div className="navbar-end">
            <div className="flex justify-between gap-6">
              <Link className="btn-ghost">
                <FaRegUserCircle className="text-white text-2xl" />
              </Link>
              <Link className="btn-ghost relative ">
                <FaRegHeart className="text-white text-2xl " />
                <div className="indicator absolute top-0 md:right-[-5px]">
                  <span className="indicator-item badge bg-[#f1970a] border-[#f1970a]">
                    0
                  </span>
                </div>
              </Link>
              <Link className="btn-ghost relative ">
                <MdOutlineShoppingCart className="text-white text-2xl " />
                <div className="indicator absolute top-0 md:right-[-5px]">
                  <span className="indicator-item badge bg-[#f1970a] border-[#f1970a]">
                    0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
