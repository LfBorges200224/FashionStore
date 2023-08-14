import { useContext, useRef } from "react";
import { ProductContext } from "../providers/ProductContext";
import { HighlightSection } from "../components/general/HighlightSection";
import { Hero } from "../components/home/Hero";
import { useEffect, useState } from "react";
import { Cart } from "../components/cart/Cart";

export const Home = () => {
  const { products } = useContext(ProductContext);

  const highlightSectionRef = useRef<HTMLElement>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Cart>
      <main className="w-5/6 mx-auto min-h-screen py-20 flex flex-col gap-20">
        <Hero loading={loading} highlightSectionRef={highlightSectionRef} />
        <HighlightSection
          highlightSectionRef={highlightSectionRef}
          productArray={products}
        />
      </main>
    </Cart>
  );
};
