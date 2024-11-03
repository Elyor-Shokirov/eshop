import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../components";
import ProductContainer from "../components/productContainer";
import { changeAnyValue } from "../feauturs/productSlice";
import { useFetch } from "../hooks/useFetch";
function CategoryPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [categoryData, setCategoryData] = useState();

  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/category/${slug}`
  );

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if (data?.products) {
      dispatch(changeAnyValue(data.products));
    }
  }, [data]);

  return (
    <div className="m-auto max-w-[1440px] ">
      <div className="pt-8">
        {isPending ? (
          <Loading />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : products && products ? (
          <ProductContainer products={products} />
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
