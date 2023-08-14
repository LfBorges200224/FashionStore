import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";

export const DeleteProductModal = () => {
  const { deleteProduct, setSelectedProduct, deleteModal, selectedProduct } =
    useContext(ProductContext);

  return (
    <>
      <dialog
        ref={deleteModal}
        className="modal w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <div className="modal-box pt-20">
          <button
            onClick={() => deleteModal.current?.close()}
            className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-oswald uppercase font-semibold tracking-wide text-2xl absolute left-6 top-7">
            DELETAR PRODUTO
          </h3>
          <p className="pb-10 font-oswald">
            Tem certeza que deseja deletar o produto selecionado?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setSelectedProduct(undefined);
                deleteModal.current?.close();
              }}
              className="btn btn-outline rounded-none font-oswald font-light"
            >
              CANCELAR
            </button>
            <button
              onClick={() => {
                if (selectedProduct) deleteProduct(selectedProduct.id);
                setSelectedProduct(undefined);
                deleteModal.current?.close();
              }}
              className="btn btn-primary rounded-none font-oswald font-light"
            >
              DELETAR
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
