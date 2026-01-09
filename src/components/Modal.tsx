import type { ReactNode } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbAlertOctagon } from "react-icons/tb";
import clsx from "clsx";
import { useIsScreen } from "../hooks";
import { Button } from "./form-controls";
import { toast } from "react-hot-toast";

type ModalProps = {
  title: string;
  content: string;
  children?: ReactNode;
  type?: "alert" | "success";
  buttonType?: "copy" | "confirm";
  onClose?: () => void;
  onConfirm?: () => void;
};

export const Modal = ({
  title,
  content,
  children,
  type,
  buttonType = "confirm",
  onClose,
  onConfirm,
}: ModalProps) => {
  const isMobile = useIsScreen();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success("Copied");
      onClose?.();
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  const handleButtonClick = () => {
    const actions = {
      copy: onCopy,
      confirm: onConfirm,
    };

    actions[buttonType]?.();
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-black/70 backdrop-blur-xs">
      <section
        className={clsx(
          "bg-white dark:bg-d-base absolute space-y-10",
          isMobile && "w-full rounded-t-lg bottom-0 p-5",
          !isMobile &&
            "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-10 w-[500px] rounded-lg shadow-sm"
        )}
      >
        {type === "alert" ? (
          <div className="bg-amber-100 inline-flex p-3 rounded-full">
            <TbAlertOctagon className="text-2xl text-amber-700" />
          </div>
        ) : (
          type === "success" && (
            <div className="bg-green-100 inline-flex p-3 rounded-full">
              <LuBadgeCheck className="text-2xl text-primary" />
            </div>
          )
        )}

        <div className="space-y-3">
          <h1 className="text-xl font-medium">{title}</h1>
          <p>{content}</p>
          <div>{children}</div>
        </div>

        <div className="w-1/3">
          {type !== "success" && (
            <Button
              onClick={handleButtonClick}
              text={
                buttonType === "confirm"
                  ? "Ok"
                  : buttonType === "copy"
                  ? "Copy"
                  : ""
              }
            />
          )}
        </div>
      </section>
    </div>
  );
};
