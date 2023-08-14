import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { BiUserCircle } from "react-icons/bi";

export const ShoppingNavbar = () => {
  const { toggleCartModal, cartCount } = useContext(ProductContext);

  return (
    <nav className="fixed top-0 w-full bg-base-100 z-10">
      <div className="w-5/6 mx-auto flex justify-between py-2 sm:py-4 items-center">
        <Link
          to="/"
          className="font-oswald text-lg font-medium uppercase tracking-wide select-none"
        >
          fashionstore
        </Link>
        <div className="flex gap-7">
          <Link to="/login">
            <BiUserCircle className="text-3xl"></BiUserCircle>
          </Link>
          <div className="indicator">
            <span
              className={`${
                cartCount !== 0 ? "" : "hidden"
              } indicator-item badge badge-secondary font-roboto rounded-full text-xs select-none`}
            >
              {cartCount.toString()}
            </span>
            <label
              onClick={toggleCartModal}
              className="cursor-pointer flex items-center"
            >
              <AiOutlineShoppingCart className="text-3xl" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
