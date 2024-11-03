import React from "react";
import { toast } from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProducts,
  likedProducts,
  unLikeProducts,
} from "../feauturs/productSlice";
import "./product.css";

function Products({ product, added }) {
  const { id, images, title, price } = product;
  const dispatch = useDispatch();

  const { products, likedArray, shopCard } = useSelector(
    (state) => state.product
  );

  const addLikedProduct = (product) => {
    const isLiked = likedArray.find((pro) => pro.id === product.id);

    if (isLiked) {
      dispatch(unLikeProducts(product.id));
      toast.error("Maxsulotingiz sevimlilar ro'yhatidan o'chirildi");
    } else {
      dispatch(likedProducts(product));
      toast.success("Maxsulotingiz sevimlilar ro'yhatiga qo'shildi", {
        style: {
          border: "1px solid #4caf50",
          padding: "16px",
          background: "#4caf50",
          color: "#fff",
          fontFamily: "Montserrat",
          fontWeight: 300,
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#4caf50",
        },
      });
    }
  };

  const handleAddProducts = (product) => {
    const addShopCard = products.find((pro) => pro.id === product.id);
    if (addShopCard) {
      const addProductPromise = new Promise((resolve, reject) => {
        try {
          dispatch(addProducts(addShopCard));
          resolve();
        } catch (error) {
          reject(error);
        }
      });
      toast.promise(
        addProductPromise,
        {
          loading: "Saving...",
          success: <b>Mahsulotingiz muvofaqqiyatli qo'shildi</b>,
          error: <b>Could not save.</b>,
        },
        {
          style: {
            border: "1px solid #4caf50",
            padding: "16px",
            background: "#4caf50",
            color: "#fff",
            fontFamily: "Montserrat",
            fontWeight: 300,
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4caf50",
          },
        }
      );
    }
  };

  return (
    <div className="col-span-12 md:col-span-3">
      <div className="card bg-base-100 w-full shadow-xl product-grid p-2 min-h-[30rem]">
        <figure className="product-image">
          <img
            className="pic-1 group list-group-image w-full h-auto"
            src={images[0]}
            alt={title}
          />
          <img src={images[0]} alt={title} className="pic-2" />
          <ul className="social">
            <li>
              <Link to={`/product/${id}`} data-tip="Quick view">
                <MdOutlineRemoveRedEye />
              </Link>
            </li>
            <li>
              <Link>
                {!added && (
                  <span onClick={() => addLikedProduct(product)} className="">
                    <FaRegHeart className=" md:text-white text-lg hover:text-[#f1970a] " />
                  </span>
                )}
                {added && (
                  <span
                    onClick={() => addLikedProduct(product)}
                    className="  md:custom_hover_image rounded border-[1px] border-red-600 bg-red-600 p-1 md:bottom-auto md:bg-red-600">
                    <FaHeart className="text-sm text-white " />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                data-tip="Add to cart"
                onClick={() => handleAddProducts(product)}>
                <MdAddShoppingCart />
              </Link>
            </li>
            <li>
              <Link data-tip="Compare">
                <i className="fas fa-random"></i>
              </Link>
            </li>
          </ul>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-monserat font-bold">{title}</h2>
        </div>
        <div className="card-footer p-[2rem]">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-monserat font-semibold">{price}</span>{" "}
              <span>USD</span>
            </div>
            <button
              onClick={() => handleAddProducts(product)}
              className="btn rounded-full btn-ghost">
              <MdAddShoppingCart className="text-xl text-[#f1970a]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
