import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementAmount,
  deleteProducts,
  incrementAmount,
  likedProducts,
} from "../feauturs/productSlice";

function ShopCardPage() {
  const { shopCard, totalPrice } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const deleteProduct = (shopcard) => {
    dispatch(deleteProducts(shopcard.id));
  };
  const addLikedPrododucts = (shopcard) => {
    dispatch(likedProducts(shopcard));
  };

  // const totalPrice = shopCard.reduce((sum, item) => sum + item.price, 0);
  const totalFixPrice = totalPrice.toFixed(2);

  if (shopCard.length == 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10 px-3 mt-10">
        <img
          src="/img/empty_cart-512.webp"
          alt="shop card"
          className="md:w-[17rem] w-52"
        />
        <h1 className="text-center font-monserat text-sm md:text-4xl">
          Sizda hozircha hech qanday mahsulot yo'q
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
    <div>
      <div className="m-auto max-w-[1440px] p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
          <div className="col-span-12 md:col-span-8">
            <div className="card bg-base-100 shadow-xl border p-2">
              <div className="flex justify-start">
                <h3 className="ml-[60px] font-monserat font-semibold text-xl">
                  Savatchada {shopCard.length} mahsulot bor
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {shopCard.map((shopcard) => (
                      <tr key={shopcard.id}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="avatar">
                              <div className="mask mask-squircle h-20 w-20">
                                <img
                                  src={shopcard.images[0]}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{shopcard.title}</div>
                              <div className="text-sm opacity-50">
                                {shopcard.brand}
                              </div>
                              <Link
                                className="border-r-2 pr-2"
                                onClick={() => addLikedPrododucts(shopcard)}>
                                <span className="text-[#2b71f8]">
                                  Sevimlilarga qo'shish
                                </span>
                              </Link>
                              <Link
                                className="pl-2"
                                onClick={() => deleteProduct(shopcard)}>
                                <span className="text-[#2b71f8]">
                                  O'chirish
                                </span>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="flex justify-end items-end h-full flex-col min-h-[68px] md:min-w-[150px]">
                          <div className="relative md:w-40 h-3 mb-[9px] w-28">
                            <button
                              onClick={() => {
                                if (shopcard.amount == 1) {
                                  dispatch(deleteProduct(shopcard));
                                } else {
                                  dispatch(decrementAmount(shopcard));
                                }
                              }}
                              className="absolute left-[2px] !min-h-[35px] h-[36px] w-10 top-[2px] rounded-r-none btn btn-square">
                              -
                            </button>
                            <p className="w-full z-[999] h-10 text-center px-12 input input-bordered border-[2px] items-center flex justify-center border-[#111]">
                              {shopcard.amount}
                            </p>
                            {/* <input type="text" value={shopcard.amount} /> */}
                            <button
                              onClick={() =>
                                dispatch(incrementAmount(shopcard))
                              }
                              className="absolute !min-h-[35px] h-[36px] w-10  right-[2px] top-[2px] rounded-l-none btn btn-square">
                              +
                            </button>
                          </div>
                        </td>
                        <th>
                          <div className="flex justify-end items-end gap-2">
                            <span>$</span>
                            <p className="font-monserat">{` ${shopcard.price}`}</p>
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="card bg-base-100 shadow-xl border p-2 min-h-[200px]">
              <div className="card-body">
                <div className="flex justify-between">
                  <span className="font-monserat text-2xl font-bold">
                    Jami:
                  </span>
                  <span className="text-2xl font-monserat font-bold">
                    $ {totalFixPrice}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className=" font-monserat text-sm font-bold">
                    Yetkazib berish:
                  </span>
                  <span className="font-monserat text-sm">
                    Kurer orqali yetkaziv berish
                  </span>
                </div>
                <div className="">
                  <span className="font-monserat text-sm font-bold">
                    Tolov turi
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-monserat text-sm font-bold">
                    Buyurtma turi
                  </span>
                  <span className="font-monserat text-sm">To'liq to'lash</span>
                </div>
                <hr />
                <button className="btn font-monserat bg-[#f1970a] text-white md:text-xl">
                  Buyurma berish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCardPage;
