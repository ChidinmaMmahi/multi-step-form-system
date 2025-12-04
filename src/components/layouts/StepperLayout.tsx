import { Stepper } from "../stepper";

export const StepperLayout = () => {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold">Multi Step Form</h1>
        <p>This is a sample to show i can mimic how a multi step form works</p>
      </div>
      <Stepper />
    </section>
  );
};
