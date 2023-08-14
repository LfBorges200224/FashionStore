import { ProductList } from "./ProductList";
import { IHighlightSectionProps } from "../../interfaces";

export const HighlightSection = ({
  productArray,
  highlightSectionRef,
}: IHighlightSectionProps) => {
  return (
    <section
      ref={highlightSectionRef}
      className="w-full flex flex-col gap-10 lg:gap-14 overflow-hidden"
    >
      <h2 className="  font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
        Produtos em destaque
      </h2>
      <ProductList productArray={productArray} />
    </section>
  );
};
