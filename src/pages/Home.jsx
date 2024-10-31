import React from "react";
import { CarouselPage, Dilvery, Products } from "../components";

function Home() {
  return (
    <div>
      <CarouselPage />

      <Dilvery />

      <div className="mt-[50px] mb-[50px]">
        <Products />
      </div>
    </div>
  );
}

export default Home;
