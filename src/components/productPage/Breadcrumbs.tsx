import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces";

export const Breadcrumbs = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex gap-3 justify-center text-center uppercase font-oswald text-sm font-medium">
      <Link to="/" className="link-hover cursor-pointer">
        Home
      </Link>
      {">"}
      <a className="select-none">{product.name}</a>
    </div>
  );
};
