import { ErrorMessage, FieldProps, useField, useFormikContext } from "formik";

type Props = {
  className?: string;
  label: string;
  name: string;
  options: { label: string; value: string }[];
};

const SelectInput = ({ className = "", label, name, options }: Props) => {
  const [field, { value, error }, helpers] = useField({ name, type: "select" });

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="mb-2 text-sm font-bold">
        {label}
      </label>
      <select
        className="bg-white p-4 text rounded border-neutral-400 border"
        {...field}
      >
        <option value="">Select {label}</option>
        {options?.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <ErrorMessage
        name={name}
        render={(msg) => (
          <p className="text-red-700 font-bold text-sm">{msg}</p>
        )}
      />
    </div>
  );
};

export default SelectInput;
