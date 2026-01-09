import { FormLayout } from "./index";
import { Stepper } from "../stepper";
import type { FormLayoutProps } from "./models/FormLayoutProps";
import { useIsScreen } from "../../hooks";
import clsx from "clsx";
import { ThemeSwitch } from "../ThemeSwitch";

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
        "flex",
        !isMobile &&
          "py-20 sm:px-5 sm: space-x-5 lg:px-20 xl:px-28 justify-between items-center lg:space-x-10 xl:space-x-20",
        isMobile && "min-h-screen flex-col bg-base dark:bg-d-base"
      )}
    >
      <section className="sm:w-1/2">
        <Stepper />
      </section>
      <section className={clsx("sm:w-1/2 space-y-5", isMobile && "flex-1")}>
        <div className="flex justify-end ">
          <ThemeSwitch />
        </div>
        <section
          className={clsx(
            "bg-white/90 dark:bg-d-base/90 shadow-2xl",
            !isMobile && "w-full rounded-lg shadow-lg p-4 lg:p-10",
            isMobile && "flex-1 p-8 pt-0"
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
      </section>
    </div>
  );
};
