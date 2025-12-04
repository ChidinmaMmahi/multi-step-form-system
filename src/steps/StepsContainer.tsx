import { useStepStore } from "../store/stepStore";
import { PersonalInfo, Address, Payment, Verification } from "./index";

export const StepsContainer = () => {
  const currentStep = useStepStore((state) => state.currentStep);

  return (
    <div>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <Address />}
      {currentStep === 3 && <Payment />}
      {currentStep === 4 && <Verification />}
    </div>
  );
};
