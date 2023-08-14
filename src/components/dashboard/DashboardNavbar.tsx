import { useContext } from "react";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { UserContext } from "../../providers/UserContext";

export const DashboardNavbar = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <nav className="flex gap-8 text-xl pt-16">
      <Link
        to="/dashboard/home"
        className="font-oswald font-normal link-hover cursor-pointer uppercase"
      >
        Início
      </Link>
      <Link
        to="/dashboard/products"
        className="font-oswald font-normal link-hover cursor-pointer uppercase"
      >
        Produtos
      </Link>
      <button
        onClick={userLogout}
        className="h-fit absolute top-[2%] right-[8%]"
      >
        <GrLogout className="text-xl xl:text-2xl" />
      </button>
    </nav>
  );
};
