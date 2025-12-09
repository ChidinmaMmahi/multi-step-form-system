import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";

export const AccountSetup = () => {
  const { data, update } = useFormStore();

  const isComplete = !!(data.email && data.password && data.confirmPassword);

  return (
    <DefaultLayout
      title="Account Setup"
      subtitle="Please provide your email address and set a password"
      buttonDisabled={!isComplete}
    >
      <div className="flex flex-col gap-y-4">
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={data.email}
          type="email"
          onChange={(e) => update("email", e.target.value)}
        />
        <Input
          label="Password"
          placeholder="********"
          value={data.password}
          type="password"
          onChange={(e) => update("password", e.target.value)}
        />
        <Input
          label="Confirm Password"
          placeholder="********"
          value={data.confirmPassword}
          type="password"
          onChange={(e) => update("confirmPassword", e.target.value)}
        />
      </div>
    </DefaultLayout>
  );
};
