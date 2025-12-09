import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";

export const ProfileInfo = () => {
  const { data, update } = useFormStore();

  const isComplete = !!(
    data.firstName &&
    data.lastName &&
    data.gender &&
    data.dob
  );

  return (
    <DefaultLayout
      title="Profile Information"
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
          label="Gender"
          fieldType="radio"
          options={["Male", "Female", "Other"]}
          value={data.gender}
          onChange={(e) =>
            update("gender", e.target.value as "male" | "female" | "other")
          }
        />
        <Input
          label="Date of Birth"
          value={data.dob}
          type="date"
          onChange={(e) => update("dob", e.target.value)}
        />
      </div>
    </DefaultLayout>
  );
};
