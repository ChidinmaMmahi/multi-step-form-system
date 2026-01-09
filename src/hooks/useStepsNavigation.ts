import { useFormStore, useStepStore } from "../store";

export const useStepNavigation = () => {
  const {
    currentStep,
    nextStep,
    prevStep,
    totalSteps,
    goToStep,
    completedSteps,
  } = useStepStore();
  const { data, update } = useFormStore();

  const handleNextSteps = () => {
    if (currentStep === 3 && data.isPhoneVerified) {
      goToStep(5);
    }

    if (currentStep === 4 && data.isPhoneVerified) {
      completedSteps.push(4);
      console.log(completedSteps);
      goToStep(5);
    }

    if (currentStep === totalSteps) {
      update("isAccountSuccess", true);
    }
    nextStep();
  };

  const handlePrevSteps = () => {
    if (currentStep === 5 && data.isPhoneVerified) {
      goToStep(3);
    } else {
      prevStep();
    }
  };

  return {
    handleNextSteps,
    handlePrevSteps,
  };
};
