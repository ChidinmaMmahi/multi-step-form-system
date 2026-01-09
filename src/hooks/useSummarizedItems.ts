import { useFormStore } from "../store";

export const useSummarizedItems = () => {
  const { data } = useFormStore();

  return [
    { id: "email", key: "Email", value: data.email },
    {
      id: "fullName",
      key: "Full name",
      value: data.lastName + " " + data.firstName,
    },
    { id: "gender", key: "Gender", value: data.gender },
    { id: "dob", key: "Date of Birth", value: data.dob },
    { id: "phone", key: "Phone number", value: data.phone },
    { id: "address", key: "Address", value: data.address },
  ];
};
