import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../components/productContainer";
import { useFetch } from "../hooks/useFetch";

function CategoryPage() {
  const { slug } = useParams();

  const [categoryData, setCategoryData] = useState();

  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/category/${slug}`
  );

  useEffect(() => {
    if (data) {
      setCategoryData(data);
    }
  }, [data]);

  return (
    <div className="m-auto max-w-[1440px]">
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : categoryData && categoryData.products ? (
          <ProductContainer products={categoryData.products} />
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
