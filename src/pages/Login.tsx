import { Link } from "react-router-dom";
import { Footer } from "../components/general/Footer";
import { FormLogin } from "../validation/LoginFormValidation/FormLogin";
import { useEffect, useState } from "react";
import { Logo } from "../components/general/Logo";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <main className="w-5/6 mx-auto min-h-screen flex justify-center py-16">
        <div
          className={`${
            loading ? "translate-y-5" : ""
          } flex flex-col justify-center lg:flex-row gap-10 items-center transition-all duration-1000`}
        >
          <div className="rounded-lg lg:w-1/2 xl:w-2/3">
            <img src="https://i.ibb.co/M1yqphr/Rectangle-2-1.png" />
          </div>
          <FormLogin />
        </div>
      </main>
      <Footer />
    </>
  );
};
