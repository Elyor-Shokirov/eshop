import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function InfoProducts() {
  const { id } = useParams();

  const { products } = useSelector((state) => state.product);

  const productinfo = products.find((product) => product.id == id);

  console.log(productinfo);
  return (
    <div>
      <div className="m-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-5">
          <div className="col-span-1 md:col-span-5">
            <div className=" border rounded ">
              <img src={productinfo.images} alt="" />
            </div>
          </div>
          <div className="col-span-1 md:col-span-7">
            <div className="font-monserat font-bold  ">
              <p>{productinfo.title}</p>
            </div>
            <div className="mt-4">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400 disabled"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <p className="mt-3 font-monserat font-medium text-xl">{`$ ${productinfo.price} usd`}</p>
              </div>
              <div>
                <p className="mt-3 font-monserat font-light text-xl">
                  {productinfo.description}
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <p>{`Brand: ${productinfo.brand}`}</p>
                <p>{`Yetkazib berish: ${productinfo.shippingInformation}`}</p>
                <p>{`Kafolat: ${productinfo.warrantyInformation}`}</p>
              </div>
              <div>
                <img src={productinfo.meta.qrCode} alt="QR CODE" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-monserat text-3xl font-bold">Sharxlar</p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="grid  grid-cols-1 md:grid-cols-12 gap-4">
            {productinfo.reviews.map((rew, idx) => (
              <div key={idx} className="md:col-span-3">
                <div className="card bg-white border shadow-lg font-monserat w-full">
                  <div className="card-body">
                    <h6 className="card-title">{rew.reviewerName}</h6>
                    <p>{rew.reviewerEmail}</p>
                    <span className="flex">
                      <FaStar className="text-xl text-[#f1970a]" />
                      <span>{rew.rating}</span>
                    </span>
                    <p>{rew.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProducts;
