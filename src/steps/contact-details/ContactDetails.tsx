import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";
import { useState, useEffect } from "react";
import { validatePhone } from "../../utils/validation";

export const ContactDetails = () => {
  const { data, update, updatePhone } = useFormStore();

  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setError(validatePhone(data.phone) || "");
  }, [data.phone]);

  const isComplete = !error && data.phone && data.address;

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
          error={touched ? error : ""}
          onChange={(e) => {
            if (!touched) setTouched(true);
            const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 12);
            updatePhone(value);
          }}
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
