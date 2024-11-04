import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import Products from "./products";

function ProductContainer({ products }) {
  const dispatch = useDispatch();
  const { likedArray } = useSelector((state) => state.product);

  return (
    <div className="m-auto max-w-[1440px] px-8 md:bg-white bg-gray-100  p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            added={likedArray.some((pro) => pro.id == product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
