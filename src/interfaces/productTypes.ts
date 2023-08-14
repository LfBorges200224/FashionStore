import {
  ReactNode,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  RefObject,
} from "react";
import { NavigateFunction } from "react-router-dom";
import { TAddProductForm } from "../components/addProduct/addProductFormSchema";
import { TEditProductFormValues } from "../components/editProduct/editProductFormSchema";

export interface IProductContextProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

export interface IProductContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  navigate: NavigateFunction;
  cartProducts: [] | IProduct[];
  cartModal: MutableRefObject<HTMLInputElement>;
  removeCartItem: (id: string) => void;
  addProduct: (formData: TAddProductForm) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  toggleCartModal: () => void;
  addCartItem: (product: IProduct) => void;
  editProduct: (
    formData: TEditProductFormValues,
    productId: number
  ) => Promise<void>;
  selectedProduct: IProduct | undefined;
  setSelectedProduct: Dispatch<React.SetStateAction<IProduct | undefined>>;
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[] | []>>;
  addModal: RefObject<HTMLDialogElement>;
  editModal: RefObject<HTMLDialogElement>;
  deleteModal: RefObject<HTMLDialogElement>;
  cartCount: Number;
  cartTotal: number;
  mainLoading: boolean;
}

export interface ICartProps {
  children: ReactNode;
}

export interface IProductListProps {
  productArray: IProduct[];
}

export interface IDisplayedProductProps {
  loading: boolean;
  product: IProduct;
}

export interface IHighlightProductCardProps {
  imgSource: string;
  productTitle: string;
  productPrice: number;
  productId: number;
}

export interface IHighlightSectionProps {
  productArray: IProduct[];
  highlightSectionRef: RefObject<HTMLElement> | undefined;
}

export interface ICartProductCardProps {
  productTitle: string;
  productPrice: number;
  imgSource: string;
  productQuantity: number;
  productId: number;
}

export interface IDashboardProductCard {
  productName: string;
  productPrice: number;
  productDescription: string;
  imgSource: string;
  productId: number;
}
