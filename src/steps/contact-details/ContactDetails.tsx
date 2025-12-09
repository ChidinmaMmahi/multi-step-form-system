import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";

export const ContactDetails = () => {
  const { data, update } = useFormStore();

  const isComplete = !!(data.phone && data.address);

  return (
    <DefaultLayout
      title="Contact Details"
      subtitle="Please provide your name, email address and phone number"
      buttonDisabled={!isComplete}
    >
      <div className="flex flex-col gap-y-4">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <Input
          label="Address"
          placeholder="Enter your address"
          value={data.address}
          onChange={(e) => update("address", e.target.value)}
        />
        {/* city, state and Country select input */}
      </div>
    </DefaultLayout>
  );
};
