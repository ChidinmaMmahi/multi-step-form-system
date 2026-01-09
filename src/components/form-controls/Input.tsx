type InputProps = {
  fieldType?: "input" | "select" | "radio";
  options?: string[];
  label?: string;
  type?: "text" | "number" | "email" | "password" | "date" | "tel";
  value?: string;
  placeholder?: string;
  extraClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  fieldType,
  options,
  label,
  type,
  placeholder,
  value,
  extraClassName,
  onChange,
}: InputProps) => {
  const baseClass =
    "border border-secondary-100 dark:border-d-secondary-100 w-full rounded-md p-2";

  return fieldType === "radio" ? (
    <span className="text-sm font-medium">
      {label}
      <div className={`${baseClass} flex gap-x-3 flex-wrap`}>
        {options?.map((option) => (
          <label key={option} className="flex items-center gap-x-1">
            <input
              type="radio"
              value={option}
              name="gender"
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </span>
  ) : (
    <label className="text-sm font-medium">
      {label}
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className={`${baseClass} focus:outline-none focus:border-primary-100 placeholder:text-xs ${extraClassName}`}
      />
    </label>
  );
};
