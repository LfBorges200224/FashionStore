import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { IDashboardProductCard } from "../../interfaces";

export const DashboardProductCard = ({
  productName,
  productPrice,
  productDescription,
  imgSource,
  productId,
}: IDashboardProductCard) => {
  const { setSelectedProduct, editModal, deleteModal } =
    useContext(ProductContext);

  const setProduct = () => {
    setSelectedProduct({
      name: productName,
      price: productPrice,
      description: productDescription,
      image: imgSource,
      id: productId,
      quantity: undefined,
    });
  };

  return (
    <li className=" flex flex-col lg:flex-row justify-between ">
      <div className="w-full flex items-center gap-4">
        <div className="overflow-hidden rounded-xl shrink-0">
          <img
            src={imgSource}
            className="object-cover w-28 h-28 md:w-44 md:h-44"
            alt="Item da loja"
          />
        </div>
        <div className=" flex flex-col justify-between w-full gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-roboto font-bold">{productName}</h2>
            <span className=" text-lg font-oswald font-normal">
              {productPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              className="h-fit"
              onClick={() => {
                setProduct();
                editModal.current?.showModal();
              }}
            >
              <MdOutlineEdit size="2.25rem" />
            </button>
            <button
              className="h-fit"
              onClick={() => {
                setProduct();
                deleteModal.current?.showModal();
              }}
            >
              <TfiTrash size="2.25rem" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
