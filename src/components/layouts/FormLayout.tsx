import { Button } from "../form-controls";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useStepStore } from "../../store";
import { IoIosArrowBack } from "react-icons/io";

export const FormLayout = ({
  title,
  children,
  subtitle,
  buttonDisabled,
}: FormLayoutProps) => {
  const nextStep = useStepStore((state) => state.nextStep);
  const prevStep = useStepStore((state) => state.prevStep);
  const currentStep = useStepStore((state) => state.currentStep);
  const totalSteps = useStepStore((state) => state.totalSteps);

  return (
    <form className="space-y-10">
      <div className="space-y-1">
        {currentStep !== 1 && (
          <span
            onClick={prevStep}
            className="inline-flex items-center hover:underline text-primary-100 cursor-pointer"
          >
            <IoIosArrowBack />
            Back
          </span>
        )}
        <legend className="text-primary text-2xl font-semibold">{title}</legend>
        <p className="text-sm text-secondary">{subtitle}</p>
      </div>
      <section>{children}</section>
      <Button
        text={currentStep === totalSteps ? "Submit" : "Next"}
        variant={buttonDisabled ? "disabled" : "primary"}
        onClick={nextStep}
      />
    </form>
  );
};
