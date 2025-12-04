import { Button } from "../form-controls";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useStepStore } from "../../store";
import { useIsScreen } from "../../hooks";

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

  const isMobile = useIsScreen();

  return (
    <form className="space-y-10">
      <div className="space-y-1">
        <legend className="text-primary text-2xl font-semibold">{title}</legend>
        <p className="text-sm text-secondary">{subtitle}</p>
      </div>
      <section>{children}</section>
      <div className="flex gap-x-2">
        {!isMobile && currentStep !== 1 && (
          <Button onClick={prevStep} text="Back" variant="secondary" />
        )}
        <Button
          text={currentStep === totalSteps ? "Submit" : "Next"}
          variant={buttonDisabled ? "disabled" : "primary"}
          onClick={nextStep}
        />
      </div>
    </form>
  );
};
