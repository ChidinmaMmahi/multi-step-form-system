import type { ReactNode } from "react";
import Button from "../form-controls/Button";

const FormLayout = (children: ReactNode) => {
  return (
    <div>
      {children}
      <Button text="Next" />
    </div>
  );
};

export default FormLayout;
