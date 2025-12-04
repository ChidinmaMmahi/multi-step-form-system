type InputProps = {
  shape?: "input" | "select";
  label: string;
  type?: "text" | "number" | "email";
  value?: string;
  placeholder?: string;
  extraClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  type,
  placeholder,
  value,
  extraClassName,
  onChange,
}: InputProps) => {
  return (
    <label className="text-secondary text-sm font-medium">
      {label}
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className={`border border-secondary-100 w-full rounded-md p-2 focus:outline-none focus:border-primary-100 placeholder:text-xs ${extraClassName}`}
      />
    </label>
  );
};
