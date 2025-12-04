import { FormLayout, StepperLayout } from "./index";
import type { FormLayoutProps } from "./models/FormLayoutProps";

export const DefaultLayout = ({
  title,
  children,
  subtitle,
  buttonDisabled,
}: FormLayoutProps) => {
  return (
    <div className="bg-base-100 flex justify-between py-20 px-28 space-x-20">
      <section className="w-1/2">
        <StepperLayout />
      </section>
      <section className="w-1/2 bg-base p-10 rounded-lg shadow-lg">
        <FormLayout
          title={title}
          subtitle={subtitle}
          buttonDisabled={buttonDisabled}
        >
          {children}
        </FormLayout>
      </section>
    </div>
  );
};
