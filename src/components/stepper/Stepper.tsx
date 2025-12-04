import { useStepStore } from "../../store";
import { IoCheckmark } from "react-icons/io5";
import clsx from "clsx";

const stepDetails = [
  {
    step: 1,
    title: "Personal Information",
  },
  {
    step: 2,
    title: " Address",
  },
  {
    step: 3,
    title: " Verification",
  },
  {
    step: 4,
    title: "Card Number",
  },
];

export const Stepper = () => {
  const completedSteps = useStepStore((state) => state.completedSteps);

  return (
    <div className="space-y-8">
      {stepDetails.map((details) => {
        const isCompleted = completedSteps.includes(details.step);
        return (
          <div className="flex items-center gap-x-3">
            <div
              className={clsx(
                "border border-primary-100 text-primary text-sm size-10 flex justify-center items-center rounded-full",
                isCompleted && "bg-primary text-white border-none"
              )}
            >
              {isCompleted ? <IoCheckmark /> : details.step}
            </div>
            <div>
              <p>Step {details.step}</p>
              <p>{details.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
