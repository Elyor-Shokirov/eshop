import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CarouselPage,
  CategoryCarousel,
  Dilvery,
  Loading,
  Products,
} from "../components";
import ProductContainer from "../components/productContainer";
import { changeAnyValue } from "../feauturs/productSlice";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const dispatch = useDispatch();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/?limit=40`
  );
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if (data?.products) {
      dispatch(changeAnyValue(data.products));
    }
  }, [data]);

  return (
    <div>
      <CarouselPage />
      <Dilvery />
      <div className="p-10 mb-6">
        <CategoryCarousel />
      </div>
      <div className="mt-[50px] mb-[50px]">
        <div>{isPending && <Loading />}</div>
        <ProductContainer products={products} />
      </div>
    </div>
  );
}

export default Home;
