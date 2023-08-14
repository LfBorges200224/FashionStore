import { SubmitHandler, useForm } from "react-hook-form";
import { BiPencil } from "react-icons/bi";
import {
  TEditProductFormValues,
  editProductFormSchema,
} from "./editProductFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { FormTextInput } from "../general/FormTextInput";
import { useEffect } from "react";
import { FormTextareaInput } from "../general/FormTextareaInput";

export const EditProductForm = () => {
  const { selectedProduct, editProduct, editModal } =
    useContext(ProductContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProductFormValues>({
    resolver: zodResolver(editProductFormSchema),
  });

  useEffect(() => {
    if (selectedProduct) {
      reset({
        name: selectedProduct.name,
        price: selectedProduct.price.toString(),
        image: selectedProduct.image,
        description: selectedProduct.description,
      });
    }
  }, [selectedProduct, reset]);

  const submit: SubmitHandler<TEditProductFormValues> = (formData) => {
    if (selectedProduct) editProduct(formData, selectedProduct.id);
    editModal.current?.close();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        inputType="text"
        errors={errors}
        inputName="name"
        inputPlaceholder="Nome"
        register={register}
      />

      <FormTextInput
        inputType="text"
        errors={errors}
        inputName="price"
        inputPlaceholder="Preço (R$)"
        register={register}
      />
      <FormTextInput
        inputType="text"
        errors={errors}
        inputName="image"
        inputPlaceholder="Imagem (URL)"
        register={register}
      />
      <FormTextareaInput
        errors={errors}
        inputName="description"
        inputPlaceholder="Descrição resumida"
        register={register}
      />
      <button className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest">
        <BiPencil className="text-lg" />
        EDITAR PRODUTO
      </button>
    </form>
  );
};
