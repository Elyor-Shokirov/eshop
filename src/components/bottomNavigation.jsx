import React from "react";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BottomNavigation() {
  const dispatch = useDispatch();
  const { likedArray, shopCard, totalAmmount } = useSelector(
    (state) => state.product
  );

  return (
    <div className="btm-nav z-40 block md:hidden">
      <div className="bg-[#523d7b] h-[68px] flex items-center shadow-bottomNavigateShadow">
        <ul className="menu menu-horizontal  rounded-box flex justify-between w-full">
          <li>
            <Link to="/" className="tooltip" data-tip="Bosh sahifa">
              <IoHome className="text-2xl text-white" />
            </Link>
          </li>
          <li>
            <div className="tooltip">
              <Link
                to="/likedproducts"
                className="btn-ghost relative tooltip"
                data-tip="Sevemlilar">
                <FaRegHeart className="text-white text-2xl " />
                <div className="indicator absolute top-0 right-[-4px] md:right-[-5px]">
                  <span className="indicator-item badge bg-[#f1970a] border-[#f1970a]">
                    {likedArray.length}
                  </span>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                className="btn-ghost relative tooltip"
                data-tip="Buyurtmalar"
                to="/shopcard">
                <HiOutlineShoppingCart className="text-white text-2xl" />
                <div className="indicator absolute top-0 right-[-4px]">
                  <span className="indicator-item badge bg-[#f1970a] border-[#f1970a]">
                    {totalAmmount}
                  </span>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <Link className="btn-ghost relative tooltip">
              <FaRegUserCircle className="text-white text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavigation;
