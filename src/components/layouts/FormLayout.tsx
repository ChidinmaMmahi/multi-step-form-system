import { Button } from "../form-controls";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useStepStore } from "../../store";
import { useIsScreen, useStepNavigation } from "../../hooks";

export const FormLayout = ({
  title,
  children,
  subtitle,
  buttonDisabled,
}: FormLayoutProps) => {
  const { currentStep, totalSteps } = useStepStore();

  const isMobile = useIsScreen();
  const { handlePrevSteps, handleNextSteps } = useStepNavigation();

  return (
    <form className="space-y-10">
      <div className="space-y-1">
        <legend className="text-primary dark:text-d-primary text-2xl font-semibold">
          {title}
        </legend>
        <p className="text-sm text-gray-800 dark:text-white">{subtitle}</p>
      </div>
      <section>{children}</section>
      <div className="flex gap-x-2">
        {!isMobile && currentStep !== 1 && (
          <Button onClick={handlePrevSteps} text="Back" variant="secondary" />
        )}
        <Button
          disabled={buttonDisabled}
          text={currentStep === totalSteps ? "Submit" : "Next"}
          onClick={handleNextSteps}
        />
      </div>
    </form>
  );
};
