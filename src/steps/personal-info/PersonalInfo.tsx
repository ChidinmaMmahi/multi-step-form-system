import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";

export const PersonalInfo = () => {
  const { data, update } = useFormStore();

  const isComplete = !!(data.firstName && data.lastName && data.email);

  return (
    <DefaultLayout
      title="Personal Information"
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
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={data.email}
          type="email"
          onChange={(e) => update("email", e.target.value)}
        />
      </div>
    </DefaultLayout>
  );
};
