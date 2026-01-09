import { useStepStore } from "../store/stepStore";
import { useFormStore } from "../store/formStore";
import {
  AccountSetup,
  ProfileInfo,
  ContactDetails,
  Verification,
  Summary,
} from "./index";

export const StepsContainer = () => {
  const { currentStep } = useStepStore();

  return (
    <div>
      {currentStep === 1 && <AccountSetup />}
      {currentStep === 2 && <ProfileInfo />}
      {currentStep === 3 && <ContactDetails />}
      {currentStep === 4 && <Verification />}
      {currentStep === 5 && <Summary />}
    </div>
  );
};
