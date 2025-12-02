type InputProps = {
  shape?: "input" | "select";
  type?: "text" | "number" | "mail";
  value?: "string";
  placeholder?: string;
  extraClassName?: string;
  onChange?: () => void;
};

const Input = ({
  type,
  placeholder,
  value,
  extraClassName,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${extraClassName}`}
    />
  );
};

export default Input;
