import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { ICartProductCardProps } from "../../interfaces";
import { Link } from "react-router-dom";

export const CartProductCard = ({
  productTitle,
  productPrice,
  productQuantity,
  productId,
  imgSource,
}: ICartProductCardProps) => {
  const { removeCartItem } = useContext(ProductContext);

  return (
    <li
      id={productId.toString()}
      className="w-full flex flex-row gap-5 flex-nowrap relative"
    >
      <Link to={`/product/${productId}`} className="indicator">
        <span className="indicator-item badge text-xs badge-secondary font-roboto rounded-full select-none">
          {productQuantity}
        </span>
        <div className="rounded-md overflow-hidden w-16 h-16 cursor-pointer">
          <img src={imgSource} />
        </div>
      </Link>
      <div className="flex flex-col justify-between items-start">
        <Link
          to={`/product/${productId}`}
          className="font-oswald link-hover cursor-pointer"
        >
          {productTitle}
        </Link>
        <p className="font-oswald">
          {Number(productPrice).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button
        onClick={() => removeCartItem(productId.toString())}
        className="font-oswald font-thin text-xl absolute right-4 top-2"
      >
        —
      </button>
    </li>
  );
};
