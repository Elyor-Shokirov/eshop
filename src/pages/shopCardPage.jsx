import React from "react";
import { Link } from "react-router-dom";

function ShopCardPage() {
  return (
    <div>
      <div className="m-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
          <div className="col-span-12 md:col-span-8">
            <div className="card bg-base-100 shadow-xl border p-2">
              <div className="flex justify-start">
                <h3 className="ml-[60px] font-monserat font-semibold text-xl">
                  Savatchada 2 mahsulot bor
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
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
                                src="https://cdn.verk.net/kuvastin/w:816/h:510/rt:fit/q:80/sh:0.5/plain/images/16/2_955859-4000x4000.jpeg"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Iphone</div>
                            <div className="text-sm opacity-50">APPLE</div>
                            <Link className="border-r-2 pr-2">
                              <span className="text-[#2b71f8]">
                                Sevimlilarga qo'shish
                              </span>
                            </Link>
                            <Link className="pl-2">
                              <span className="text-[#2b71f8]">O'chirish</span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="flex justify-end items-end h-full flex-col min-h-[68px] min-w-[150px]">
                        <div className="relative w-40 h-3 mb-[9px]">
                          <button className="absolute left-[2px] !min-h-[35px] h-[36px] w-10 top-[2px] rounded-r-none btn btn-square">
                            -
                          </button>
                          <input
                            type="text"
                            className="w-full z-[999] h-10 text-center px-12 input input-bordered border-[2px] border-[#111]"
                            value="5"
                          />
                          <button className="absolute !min-h-[35px] h-[36px] w-10  right-[2px] top-[2px] rounded-l-none btn btn-square">
                            +
                          </button>
                        </div>
                      </td>
                      <th>
                        <div className="flex justify-end items-end">
                          <p className="font-monserat">$ 14.90</p>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCardPage;
