import { AiOutlinePlusCircle } from "react-icons/ai";
import { Logo } from "../components/general/Logo";
import { DashboardNavbar } from "../components/dashboard/DashboardNavbar";
import { Footer } from "../components/general/Footer";
import { DashboardProductCard } from "../components/dashboard/DashboardProductCard";
import { EditProductModal } from "../components/editProduct/EditProductModal";
import { AddProductModal } from "../components/addProduct/AddProductModal";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
import { DeleteProductModal } from "../components/dashboard/DeleteProductModal";
import { useEffect, useState } from "react";

export const DashboardProducts = () => {
  const { products, addModal } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Logo />
      <main className="w-5/6 mx-auto min-h-screen pb-10">
        <div
          className={`${
            loading ? "translate-y-3" : ""
          } flex flex-col gap-10 transition-all duration-1000`}
        >
          <DashboardNavbar />
          <EditProductModal />
          <AddProductModal />
          <DeleteProductModal />
          <div className="flex gap-10 md:items-center overflow-hidden">
            <div className=" flex flex-col gap-8">
              <h1 className="font-oswald text-4xl md:text-6xl font-medium">
                PRODUTOS
              </h1>
              <p className="font-roboto font-normal text-xl">
                Gerencie os produtos do catálogo
              </p>
            </div>
            <button
              onClick={() => addModal.current?.showModal()}
              className="ml-auto cursor-pointer btn btn-primary h-fit md:h-14 p-2 md:rounded-none text-lg flex items-center gap-4"
            >
              <AiOutlinePlusCircle size="2rem" />{" "}
              <span className="hidden md:block font-oswald font-light tracking-widest">
                NOVO PRODUTO
              </span>
            </button>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 w-full list-none overflow-hidden">
            {products.map((product) => (
              <DashboardProductCard
                key={product.id}
                productName={product.name}
                productPrice={Number(product.price)}
                productDescription={product.description}
                imgSource={product.image}
                productId={product.id}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};
