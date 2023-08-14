import { BsCartPlus } from "react-icons/bs";
import { IHighlightProductCardProps } from "../../interfaces";
import { Link } from "react-router-dom";

export const HighlightProductCard = ({
  imgSource,
  productTitle,
  productPrice,
  productId,
}: IHighlightProductCardProps) => {
  return (
    <li className="flex flex-col flex-shrink-0 gap-3 sm:gap-5">
      <Link
        to={`/product/${productId}`}
        className="rounded-3xl shrink-0  cursor-pointer overflow-hidden relative"
      >
        <img
          src={imgSource}
          className="object-cover w-44 lg:w-60 h-48 sm:h-52 md:h-64 lg:h-72 hover:scale-[105%] transition-all duration-1000"
        />
      </Link>
      <Link
        to={`/product/${productId}`}
        className="text-md sm:text-lg font-oswald font-semibold sm:font-semibold tracking-wide link-hover cursor-pointer"
      >
        {productTitle}
      </Link>
      <p className="uppercase font-oswald font-normal">
        {Number(productPrice).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button className="mt-2 w-fit mr-auto flex flex-row gap-5 items-center hover:bg-base-300 transition-all duration-300 pr-4 hover:scale-[105%]">
        <div className="bg-black p-3 sm:p-3">
          <BsCartPlus className="text-lg sm:text-2xl fill-white" />
        </div>
        <Link
          to={`/product/${productId}`}
          className="uppercase font-oswald text-xs sm:text-sm whitespace-nowrap  font-normal tracking-widest items-center"
        >
          Saiba mais
        </Link>
      </button>
    </li>
  );
};
