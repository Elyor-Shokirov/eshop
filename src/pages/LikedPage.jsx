import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Products } from "../components";
import ProductContainer from "../components/productContainer";

function LikedPage() {
  const { likedArray } = useSelector((state) => state.product);

  if (likedArray.length == 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10 px-3 mt-10">
        <img src="/img/empty-product.svg" alt="" />
        <h1 className="text-center font-monserat text-sm md:text-4xl">
          Sevimli mahsulotlar yo'q :(
        </h1>
        <Link to="/">
          <button className="btn bg-[#f1970a] btn-sm md:btn-md text-white font-monserat">
            Bosh sahifa
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-11 m-auto max-w-[1440px] flex flex-col gap-3">
      <h1 className="ml-[2rem] text-[#f1970a] font-monserat text-2xl justify-center text-center font-bold">
        Sevimli mahsulotlar
      </h1>
      {likedArray.length > 0 && <ProductContainer products={likedArray} />}
    </div>
  );
}

export default LikedPage;
