import React from "react";

function DilveryComponent() {
  return (
    <div className=" bg-cardSectionBgImage bg-no-repeat  md:h-[300px] bg-cover	md:w-full pb-7 flex ">
      <div className="m-auto max-w-[1440px] ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <div className="card bg-base-100 w-96 shadow-xl mt-7 md:mt-[40px]">
              <div className="card-body">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/img/truck 1.png"
                    alt="ICON_DIL"
                    className="w-[13%]"
                  />
                  <p className="text-lg text-center font-monserat mt-2">
                    O’zbekiston bo’ylab bepul yetkazib berish
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn bg-[#f1970a] w-[200px] text-base text-white uppercase">
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="card bg-base-100 w-96 shadow-xl md:mt-[40px]">
              <div className="card-body">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/img/app_1.png"
                    alt="ICON_DIL"
                    className="w-[13%]"
                  />
                  <p className="text-lg text-center font-monserat mt-2">
                    O’zbekiston bo’ylab bepul yetkazib berish
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn bg-[#f1970a] w-[200px] text-base text-white uppercase">
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="card bg-base-100 w-96 shadow-xl md:mt-[40px]">
              <div className="card-body">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/img/payment_1.png"
                    alt="ICON_DIL"
                    className="w-[13%]"
                  />
                  <p className="text-lg text-center font-monserat mt-2">
                    O’zbekiston bo’ylab bepul yetkazib berish
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn bg-[#f1970a] w-[200px] text-base text-white uppercase">
                      Batafsil
                    </button>
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

export default DilveryComponent;
