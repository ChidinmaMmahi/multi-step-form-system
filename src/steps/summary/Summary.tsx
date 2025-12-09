import { DefaultLayout } from "../../components";
import { useSummarizedItems } from "../../hooks";

export const Summary = () => {
  const items = useSummarizedItems();
  return (
    <DefaultLayout title="Summary">
      <div className="space-y-5 divide-y-[0.5px] divide-d-secondary-100 dark:divide-secondary-100 border-b-[0.5px] border-d-secondary-100 dark:border-secondary-100">
        {items.map((item) => (
          <p className="flex justify-between gap-2">
            <span className="text-xs font-semibold">{item.key}:</span>{" "}
            <span className="text-end">{item.value}</span>
          </p>
        ))}
      </div>
    </DefaultLayout>
  );
};
