import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarouselPage, Dilvery, Products } from "../components";
import ProductContainer from "../components/productContainer";
import { changeAnyValue } from "../feauturs/productSlice";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const dispatch = useDispatch();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/?limit=50`
  );
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if (data?.products) {
      dispatch(changeAnyValue(data.products));
    }
  }, [data]);
  console.log(products);

  return (
    <div>
      <CarouselPage />
      <Dilvery />
      <div className="mt-[50px] mb-[50px]">
        {isPending && <h1>Loading...</h1>}
        <ProductContainer products={products} />
      </div>
    </div>
  );
}

export default Home;
