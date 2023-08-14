import { RefObject } from "react";

interface IHeroProps {
  loading: boolean;
  highlightSectionRef: RefObject<HTMLElement>;
}

export const Hero = ({ loading, highlightSectionRef }: IHeroProps) => {
  return (
    <div
      className={`${
        loading ? "opacity-0 translate-y-3 select-none" : ""
      } flex flex-col md:flex-row gap-12 items-center transition-all duration-1000`}
    >
      <img
        className="rounded-2xl md:w-2/3 "
        src="https://i.ibb.co/wwXBrt7/Rectangle-2.png"
      />
      <div className="flex flex-col gap-16 md:items-start items-center">
        <h1 className="leading-tight font-oswald uppercase font-medium text-center md:text-left text-7xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide">
          Kenzie Fashion Store
        </h1>
        <button
          onClick={() =>
            highlightSectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            })
          }
          className="btn btn-primary btn-lg rounded-none"
        >
          Confira as ofertas
        </button>
      </div>
    </div>
  );
};
