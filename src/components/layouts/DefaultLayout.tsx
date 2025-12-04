import { FormLayout, Stepper } from "./index";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useIsScreen } from "../../hooks";
import clsx from "clsx";

export const DefaultLayout = ({
  title,
  children,
  subtitle,
  buttonDisabled,
}: FormLayoutProps) => {
  const isMobile = useIsScreen();

  return (
    <div
      className={clsx(
        "bg-base-100 flex",
        !isMobile &&
          "py-20 sm:px-5 sm: space-x-5 lg:px-20 xl:px-28 justify-between lg:space-x-10 xl:space-x-20",
        isMobile && "min-h-screen flex-col bg-base"
      )}
    >
      <section className="sm:w-1/2">
        <Stepper />
      </section>
      <section
        className={clsx(
          "bg-base",
          !isMobile && "w-1/2 rounded-lg shadow-lg p-4 lg:p-10",
          isMobile && "flex-1 p-8"
        )}
      >
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
