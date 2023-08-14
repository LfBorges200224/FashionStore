import { CartProductCard } from "./CartProductCard";
import { Footer } from "../general/Footer";
import { ShoppingNavbar } from "../general/ShoppingNavbar";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { ICartProps } from "../../interfaces";

export const Cart: React.FC<ICartProps> = ({ children }) => {
  const { cartProducts, cartModal, toggleCartModal, cartTotal } =
    useContext(ProductContext);

  return (
    <div className="drawer drawer-end">
      <input ref={cartModal} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-hidden">
        <ShoppingNavbar />
        {children}
        <Footer />
      </div>
      <div className="drawer-side z-20">
        <label onClick={toggleCartModal} className="drawer-overlay"></label>
        <ul className=" p-4 pt-20 w-80 h-full bg-base-200 text-base-content flex flex-col gap-8 z-20">
          <label
            onClick={toggleCartModal}
            className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-1"
          >
            ✕
          </label>
          <h1 className="left-5 top-5 text-xl uppercase font-oswald font-semibold absolute tracking-wide">
            Carrinho
          </h1>
          <span
            className={`${
              cartProducts.length >= 1 ? "hidden" : ""
            } absolute select-none right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-center text-2xl font-roboto text-gray-400`}
          >
            Não há itens no carrinho :(
          </span>
          <span
            className={`${
              cartProducts.length < 1 ? "hidden" : ""
            } absolute flex gap-2 select-none bottom-4 left-4 text-center text-xl font-oswald uppercase `}
          >
            TOTAL:
            <span className="font-medium">
              {cartTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </span>
          {cartProducts.map((product) => {
            return (
              <CartProductCard
                key={product.id}
                productId={product.id}
                imgSource={product.image}
                productPrice={product.price}
                productTitle={product.name}
                productQuantity={product.quantity!}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
