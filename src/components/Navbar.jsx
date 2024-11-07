import React from "react";
import {
  FaPhone,
  FaPhoneAlt,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts } from "../feauturs/productSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { likedArray, shopCard, totalAmmount } = useSelector(
    (state) => state.product
  );

  const deleteProduct = (shopcard) => {
    dispatch(deleteProducts(shopcard.id));
  };

  return (
    <div className="bg-[#523d7b] hidden md:block">
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
              <p className="font-monserat text-white font-bold text-sm md:text-base">
                +358468905026
              </p>
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex justify-center gap-6 items-center">
              <Link className="btn-ghost">
                <FaRegUserCircle className="text-white text-2xl" />
              </Link>
              <Link to="/likedproducts" className="btn-ghost relative ">
                <FaRegHeart className="text-white text-2xl " />
                <div className="indicator absolute top-0 right-[-4px] md:right-[-5px]">
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
                      {totalAmmount}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[999] mt-3 md:w-[500px] shadow">
                  <div className="card-body">
                    <span className="md:text-lg font-bold text-xs">
                      {totalAmmount} mahsulot mavjud
                    </span>
                    <div className="overflow-x-auto">
                      <table className="table table-md w-full hidden md:block">
                        <tbody>
                          {shopCard.map((shopcard) => (
                            <tr key={shopcard.id} className="hover">
                              <th className="w-12">
                                <div className="avatar">
                                  <div className="w-8 rounded">
                                    <img
                                      src={shopcard.images[0]}
                                      alt="Product Avatar"
                                    />
                                  </div>
                                </div>
                              </th>

                              <td className="w-1/2">{shopcard.title}</td>

                              <td className="w-1/4">{shopcard.price}</td>

                              <td
                                className="w-12 text-center cursor-pointer"
                                onClick={() => deleteProduct(shopcard)}>
                                <RiDeleteBinLine />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="card-actions">
                      <Link
                        to="/shopcard"
                        className="btn bg-[#f1970a] text-white btn-block text-[10px]">
                        Buyurtmani rasmiylashtirish
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
