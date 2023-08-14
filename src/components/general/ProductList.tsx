import { HighlightProductCard } from "./HighlightProductCard";
import { IProductListProps } from "../../interfaces";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductList = ({ productArray }: IProductListProps) => {
  const { mainLoading } = useContext(ProductContext);
  return (
    <ul className="w-full flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
      {mainLoading ? (
        <LoadingSpinner />
      ) : (
        productArray.map((product) => (
          <HighlightProductCard
            key={product.id}
            productPrice={product.price}
            productTitle={product.name}
            imgSource={product.image}
            productId={product.id}
          />
        ))
      )}
    </ul>
  );
};
