import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema, TLoginFormValues } from "./LoginFormResolver";
import { FormTextInput } from "../../components/general/FormTextInput";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });
  const { userLogin } = useContext(UserContext);

  return (
    <>
      <form
        noValidate
        className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
        onSubmit={handleSubmit(userLogin)}
      >
        <h1 className="font-oswald text-6xl uppercase font-medium leading-90 pb-2">
          Entrar
        </h1>
        <FormTextInput
          register={register}
          errors={errors}
          inputName="email"
          inputType="text"
          inputPlaceholder="Email"
        />
        <FormTextInput
          register={register}
          errors={errors}
          inputName="password"
          inputType="password"
          inputPlaceholder="senha"
        />
        <div className="flex gap-5 mr-auto">
          <Link
            to="/register"
            className="btn btn-primary  md:btn-lg lg:btn-md rounded-none btn-outline font-normal tracking-widest font-oswald"
          >
            Cadastre-se
          </Link>
          <button
            type="submit"
            className="btn btn-primary md:btn-lg lg:btn-md rounded-none font-oswald font-normal tracking-widest text-white"
          >
            Acessar
          </button>
        </div>
      </form>
    </>
  );
};
