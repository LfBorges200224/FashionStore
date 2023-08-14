import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormSchema,
  TRegisterFormValues,
} from "./RegisterSchemaResolver";
import { FormTextInput } from "../../components/general/FormTextInput";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  return (
    <>
      <form
        className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
        onSubmit={handleSubmit(userRegister)}
      >
        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 font-oswald uppercase tracking-widest"
          >
            <BiArrowBack />
            Voltar
          </Link>
          <h1 className="font-oswald text-6xl uppercase font-medium leading-90 pb-2">
            Cadastrar-se
          </h1>
          <h4 className="font-roboto text-base">
            Seja bem-vindo, administrador!
          </h4>
        </div>
        <FormTextInput
          inputName="name"
          inputPlaceholder="Nome"
          inputType="text"
          register={register}
          errors={errors}
        />
        <FormTextInput
          inputName="email"
          inputPlaceholder="Email"
          inputType="text"
          register={register}
          errors={errors}
        />
        <FormTextInput
          inputName="password"
          inputPlaceholder="Senha"
          inputType="password"
          register={register}
          errors={errors}
        />
        <FormTextInput
          inputName="confirm"
          inputPlaceholder="Confirmar senha"
          inputType="password"
          register={register}
          errors={errors}
        />
        <button
          type="submit"
          className="btn btn-primary font-light rounded-none md:w-40 tracking-widest font-oswald ml-auto"
        >
          Cadastrar-se
        </button>
      </form>
    </>
  );
};
