import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { ProductContext } from "../../providers/ProductContext";
import { IDisplayedProductProps } from "../../interfaces";

export const DisplayedProduct = ({
  loading,
  product,
}: IDisplayedProductProps) => {
  const { addCartItem } = useContext(ProductContext);

  return (
    <>
      <div
        className={`${
          loading
            ? "opacity-0  select-none"
            : "transition-all translate-y-3 duration-1000"
        } flex flex-col sm:flex-row gap-10 justify-center items-center`}
      >
        <div className="bg-base-200 overflow-hidden rounded-3xl max-h-[30rem] lg:h-[30rem] max-w-[24rem]">
          <img
            src={product.image}
            className="hover:scale-[105%] transition-all duration-300 object-cover w-full h-full"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-5 md:w-1/3 sm:w-1/2 transition-all duration-1000 relative">
          <h3 className="text-base font-roboto font-semibold">
            {product.name}
          </h3>
          <p className="uppercase text-xl font-oswald font-normal">
            {Number(product.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="text-base font-roboto font-light">
            {product.description}
          </p>
          <button
            disabled={loading}
            onClick={() => addCartItem(product)}
            className="btn btn-primary flex-nowrap uppercase gap-3 mt-3 w-fit font-thin tracking-widest font-oswald items-center flex"
          >
            <BsCartPlus className="text-xl flex-shrink-0" />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
};
