import React from "react";
import { CiMenuBurger } from "react-icons/ci";

function Menu() {
  return (
    <div className="bg-[#5f4b84] ">
      <div className="m-auto max-w-[1440px]">
        <div className="navbar p-0">
          <div className="">
            <a className=" btn-ghost text-xl">
              <div className="dropdown dropdown-hover">
                <div className="flex justify-between md:block">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 md:w-[250px] bg-[#7355A9] border-none rounded-none h-[50px] flex gap-3 items-center text-white font-monserat text-lg font-semibold">
                    <span>
                      <CiMenuBurger className="text-white font-semibold" />
                    </span>
                    Bo'limlar
                  </div>
                  <div className="flex justify-end items-start md:hidden">
                    <img
                      className="w-[50%] mr-3"
                      src="../../public/img/logo-1.png"
                      alt=""
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <p>Computerlar</p>
                  </li>
                  <li>
                    <p>Televizorlar</p>
                  </li>
                  <li>
                    <p>Noutbooklar</p>
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ml-20">
            <ul className="menu menu-horizontal px-1  font-monserat font-bold">
              <li className="text-white ">
                <details>
                  <summary>Elektronika</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <p>Submenu 1</p>
                    </li>
                    <li>
                      <p>Submenu 2</p>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-white ">
                <a>Kiyim kechaklar</a>
              </li>
              <li className="text-white ">
                <details>
                  <summary>Avto texnika </summary>
                  <ul className="p-2 text-black">
                    <li>
                      <p>Submenu 1</p>
                    </li>
                    <li>
                      <p>Submenu 2</p>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-white ">
                <a>Kitoblar</a>
              </li>
              <li className="text-white ">
                <a>Aloqa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
