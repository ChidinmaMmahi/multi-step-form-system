import { useFormStore } from "../store";

export const useSummarizedItems = () => {
  const { data } = useFormStore();

  return [
    { key: "Email", value: data.email },
    { key: "Full name", value: data.lastName + " " + data.firstName },
    { key: "Gender", value: data.gender },
    { key: "Date of Birth", value: data.dob },
    { key: "Phone number", value: data.phone },
    { key: "Address", value: data.address },
  ];
};
