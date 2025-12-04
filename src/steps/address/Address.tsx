import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";

export const Address = () => {
  const { data, update } = useFormStore();

  const isComplete = !!(data.firstName && data.lastName && data.email);

  return (
    <DefaultLayout
      title="Address"
      subtitle="Please provide your name, email address and phone number"
      buttonDisabled={!isComplete}
    >
      <div className="flex flex-col gap-y-4">
        <Input
          label="First Name"
          placeholder="Enter your first name"
          value={data.firstName}
          onChange={(e) => update("firstName", e.target.value)}
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          value={data.lastName}
          onChange={(e) => update("lastName", e.target.value)}
        />
      </div>
    </DefaultLayout>
  );
};
