import {
  useState,
  useRef,
  useEffect,
  createContext,
  MutableRefObject,
} from "react";
import { api } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TAddProductForm } from "../components/addProduct/addProductFormSchema";
import { TEditProductFormValues } from "../components/editProduct/editProductFormSchema";
import { IProduct, IProductContext, IProductContextProps } from "../interfaces";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const { token } = useContext(UserContext);

  const [mainLoading, setMainLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProducts = async () => {
      setMainLoading(true);
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error: any) {
        toast.error(
          "Houve algum erro com a requisição dos produtos, tente novamente mais tarde"
        );
      } finally {
        setMainLoading(false);
      }
    };
    loadProducts();
  }, []);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[] | []>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    IProduct | undefined
  >();

  const addCartItem = (product: IProduct) => {
    const dupe = cartProducts.find((item) => item.id === product.id);
    if (dupe) {
      const updatedDupe = { ...dupe, quantity: (dupe.quantity || 0) + 1 };
      const updatedArray = cartProducts.map((item) =>
        item.id === product.id ? updatedDupe : item
      );
      setCartProducts(updatedArray);
      saveCartProducts(updatedArray);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      saveCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };

  const removeCartItem = (productId: string) => {
    const dupe = cartProducts.find(
      (product) => product.id.toString() === productId
    );
    if (dupe) {
      const updatedArray = cartProducts.filter(
        (product) => product.id.toString() !== productId
      );
      saveCartProducts(updatedArray);
      setCartProducts(updatedArray);
    }
  };

  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const sumCartProperty = (property: keyof IProduct) => {
    const itemTotal = (cartProducts as IProduct[]).reduce(
      (accumulator: number, product: IProduct) => {
        const value = product[property];
        if (typeof value === "number") {
          return accumulator + value;
        }
        return accumulator;
      },
      0
    );
    return itemTotal;
  };

  useEffect(() => {
    setCartCount(sumCartProperty("quantity"));
    setCartTotal(sumCartProperty("price"));
  }, [cartProducts]);

  const saveCartProducts = (cartProducts: IProduct[]) => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  };

  useEffect(() => {
    const savedCartProducts = localStorage.getItem("cartProducts");
    if (savedCartProducts) {
      setCartProducts(JSON.parse(savedCartProducts));
    }
  }, []);

  //usecallback, utility functions
  const cartModal = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const toggleCartModal = () => {
    if (cartModal.current !== null)
      cartModal.current.checked = !cartModal.current.checked;
  };

  const addProduct = async (formData: TAddProductForm) => {
    try {
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) => [...products, data]);
      toast.success(`Produto ${data.name} cadastrado com sucesso`);
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      await api.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) =>
        products.filter((product) => product.id !== productId)
      );
      toast.success("Produto deletado com sucesso");
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  const editProduct = async (
    formData: TEditProductFormValues,
    productId: number
  ) => {
    try {
      await api.put(`/products/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) =>
        products.map((product) => {
          if (productId === product.id) {
            const editedProduct = {
              name: formData.name,
              price: Number(formData.price),
              description: formData.description,
              image: formData.image,
              id: productId,
            };
            return { ...product, ...editedProduct };
          } else {
            return product;
          }
        })
      );
      toast.success("Produto atualizado com sucesso");
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  const addModal = useRef<HTMLDialogElement>(null);
  const editModal = useRef<HTMLDialogElement>(null);
  const deleteModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <ProductContext.Provider
        value={{
          mainLoading,
          products,
          setProducts,
          navigate,
          setCartProducts,
          cartProducts,
          cartModal: cartModal as MutableRefObject<HTMLInputElement>,
          removeCartItem,
          addProduct,
          editProduct,
          deleteProduct,
          selectedProduct,
          setSelectedProduct,
          toggleCartModal,
          addCartItem,
          addModal,
          deleteModal,
          editModal,
          cartCount,
          cartTotal,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
