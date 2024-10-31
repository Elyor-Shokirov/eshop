import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { changeAnyValue } from "../feauturs/productSlice";
import { useFetch } from "../hooks/useFetch";
import "./product.css";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  // const count = useSelector((state) => state.counter.value);

  console.log("dataIN", products);

  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/?limit=50`
  );

  useEffect(() => {
    if (data?.products) {
      dispatch(changeAnyValue(data.products));
    }
  }, [data]);

  return (
    <div>
      <div className="m-auto max-w-[1440px] px-8 md:bg-white bg-gray-100 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {isPending && <h1>Loading...</h1>}
          {data?.products &&
            data.products.map((product) => (
              <div key={product.id} className="col-span-12 md:col-span-3 ">
                <div className="card bg-base-100 w-full shadow-xl  product-grid p-2 min-h-[560px]">
                  <figure className="product-image ">
                    <img
                      className=" pic-1 group list-group-image img-fluid"
                      src={product.images}
                      alt="iphone"
                    />
                    <img src={product.images} alt="iphone" className="pic-2" />
                    <ul className="social">
                      <li>
                        <Link
                          to={`/product/${product.id}`}
                          data-tip="quick view">
                          <MdOutlineRemoveRedEye />
                        </Link>
                      </li>
                      <li>
                        <Link data-tip="wishlist">
                          <CiHeart />
                        </Link>
                      </li>
                      <li>
                        <Link data-tip="add to cart">
                          <MdAddShoppingCart />
                        </Link>
                      </li>
                      <li>
                        <Link data-tip="compare">
                          <i className="fas fa-random"></i>
                        </Link>
                      </li>
                    </ul>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-monserat font-bold">
                      {product.title}
                    </h2>
                    {/* <p className="font-monserat text-sm">
                      {product.description}
                    </p> */}
                    <div className="flex">
                      <span className="font-monserat font-semibold">
                        {product.price}
                      </span>{" "}
                      <span>usd</span>
                    </div>
                    <div className="card-actions justify-center mt-3 ">
                      <button className="btn bg-[#f1970a] text-white w-[200px] font-monserat text-base">
                        Sotib olish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
