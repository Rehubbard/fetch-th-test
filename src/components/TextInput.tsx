import { ErrorMessage, FieldProps, useField, useFormikContext } from "formik";

type Props = {
  className?: string;
  label: string;
  name: string;
  type?: "text" | "password" | "email";
};

const TextInput = ({ className = "", label, name, type = "text" }: Props) => {
  const [field, { value, error }, helpers] = useField({ name, type });

  return (
    <div className={`flex flex-col ${className}`}>
      <p className="mb-2 text-sm font-bold">{label}</p>
      <input
        className="bg-white p-4 text rounded border-neutral-400 border"
        {...field}
      ></input>

      <ErrorMessage
        name={name}
        render={(msg) => (
          <p className="text-red-700 font-bold text-sm">{msg}</p>
        )}
      />
    </div>
  );
};

export default TextInput;
