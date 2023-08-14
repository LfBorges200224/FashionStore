import { useNavigate } from "react-router-dom";
import { api } from "../services/Api";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  IUserContext,
  IUser,
  ILoginProps,
  IRegisterProps,
  userProviderProps,
} from "../interfaces/index";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: userProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();
  const LOCAL_STORAGE_KEY = "@TOKEN";
  const token = localStorage.getItem(LOCAL_STORAGE_KEY);
  const { reset } = useForm();

  const userLogin = async (formData: ILoginProps) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem(LOCAL_STORAGE_KEY, data.accessToken);
      reset();
      setUser(data.user);
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const userRegister = async (formData: IRegisterProps) => {
    try {
      await api.post("/users", formData);
      toast.success("Usuário registrado com sucesso");
      reset();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(undefined);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        userLogin,
        userLogout,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
