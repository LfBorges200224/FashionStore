import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputName =
  | "email"
  | "password"
  | "name"
  | "confirm"
  | "price"
  | "image"
  | "description";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
}

export const FormTextInput = ({
  register,
  errors,
  inputName,
  inputType,
  inputPlaceholder,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary"
        } transition-all duration-300 font-oswald outline-none focus:outline-none input lg:input-md md:input-lg w-full bg-gray-100 placeholder:uppercase placeholder:text-gray-500`}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-red-500 text-xs font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
