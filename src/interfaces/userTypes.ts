import { ReactNode } from "react";

export interface userProviderProps {
  children: ReactNode;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IUserContext {
  user: IUser | undefined;
  userLogin: (formData: ILoginProps) => Promise<void>;
  userRegister: (formData: IRegisterProps) => Promise<void>;
  userLogout: () => void;
  token: string | null;
}

export interface IUser {
  confirm: string;
  email: string;
  id: number;
  name: string;
}
