import { useIsScreen, useStepNavigation } from "../../hooks";
import { useStepStore } from "../../store";
import { IoCheckmark } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import clsx from "clsx";
import { stepDetails } from "./step-details";

export const Stepper = () => {
  const isMobile = useIsScreen();
  const completedSteps = useStepStore((state) => state.completedSteps);
  const currentStep = useStepStore((state) => state.currentStep);
  const totalSteps = useStepStore((state) => state.totalSteps);

  const { handlePrevSteps } = useStepNavigation();

  return isMobile ? (
    <section className="flex justify-between items-center px-8 py-4 border-b border-gray-500">
      <IoIosArrowBack onClick={handlePrevSteps} className="text-3xl" />
      <h1 className="font-semibold text-black dark:text-base-100">
        Multi Step Form
      </h1>
      <div className="text-secondary-100 text-sm bg-white size-14 flex justify-center items-center rounded-full border-5 border-primary-100">
        <span className="text-[18px] text-primary-100 font-bold">
          {currentStep}
        </span>
        &nbsp; /{totalSteps}
      </div>
    </section>
  ) : (
    <section className="space-y-10 text-black dark:text-white">
      <div>
        <h1 className="text-xl md:text-4xl font-bold text-black mb-2">
          Multi Step Form
        </h1>
        <p className="hidden lg:block dark:text-shadow-sm">
          This is a sample that mimics how a multi-step form works
        </p>
      </div>
      <div className="space-y-12">
        {stepDetails.map((details) => {
          const isCompleted = completedSteps.includes(details.step);
          const isActive = currentStep === details.step;

          return (
            <div className="flex items-center gap-x-3" key={details.step}>
              <div
                className={clsx(
                  "border border-primary-100 text-sm size-10 flex justify-center items-center rounded-full",
                  !isCompleted &&
                    !isActive &&
                    "text-primary dark:text-d-primary",
                  isCompleted &&
                    "bg-primary dark:bg-d-primary text-base dark:text-d-base border-none",
                  isActive &&
                    "bg-primary dark:bg-d-primary text-base dark:text-d-base border-none"
                )}
              >
                {isCompleted ? <IoCheckmark /> : details.step}
              </div>
              <div className="text-sm dark:text-shadow-sm">
                <p className="text-xs">Step {details.step}</p>
                <p>{details.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
