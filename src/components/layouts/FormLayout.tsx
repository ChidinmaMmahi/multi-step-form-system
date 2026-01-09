import { Button } from "../form-controls";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useFormStore, useStepStore } from "../../store";
import { useIsScreen, useStepNavigation } from "../../hooks";
import { Modal } from "../Modal";
import { useEffect, useState } from "react";

export const FormLayout = ({
  title,
  children,
  subtitle,
  buttonDisabled,
}: FormLayoutProps) => {
  const { currentStep, totalSteps } = useStepStore();
  const { data } = useFormStore();

  const isMobile = useIsScreen();
  const { handlePrevSteps, handleNextSteps } = useStepNavigation();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data.isAccountSuccess) {
      setShowModal(true);

      // Set a timeout to auto-close modal after 3 seconds
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 1500); // 3000ms = 3 seconds

      return () => clearTimeout(timer);
    }
  }, [data.isAccountSuccess]);

  return (
    <form className="space-y-10">
      <div className="space-y-1">
        <legend className="text-primary dark:text-d-primary text-2xl font-semibold">
          {title}
        </legend>
        <p className="text-sm">{subtitle}</p>
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
        {currentStep === 5 && showModal && (
          <Modal
            title="Success"
            content="Successful Creation, congrats"
            type="success"
          />
        )}
      </div>
    </form>
  );
};
