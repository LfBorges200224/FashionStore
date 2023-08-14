import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputName = "description";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputPlaceholder: string;
}

export const FormTextareaInput = ({
  register,
  errors,
  inputName,
  inputPlaceholder,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary"
        } transition-all duration-300 outline-none focus:outline-none resize-none font-oswald textarea lg:textarea-md md:textarea-lg w-full bg-gray-100 placeholder:uppercase placeholder:text-gray-500`}
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
