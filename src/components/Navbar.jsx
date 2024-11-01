import React from "react";
import {
  FaPhone,
  FaPhoneAlt,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const { likedArray } = useSelector((state) => state.product);

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
          <div className="navbar-end">
            <div className="flex justify-between gap-6 items-center">
              <Link className="btn-ghost">
                <FaRegUserCircle className="text-white text-2xl" />
              </Link>
              <Link to="/likedproducts" className="btn-ghost relative ">
                <FaRegHeart className="text-white text-2xl " />
                <div className="indicator absolute top-0 md:right-[-5px]">
                  <span className="indicator-item badge bg-[#f1970a] border-[#f1970a]">
                    {likedArray.length}
                  </span>
                </div>
              </Link>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="transition: "
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-md indicator-item bg-[#f1970a] border-none">
                      8
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link
                        to="/shopcard"
                        className="btn bg-[#f1970a] text-white btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
