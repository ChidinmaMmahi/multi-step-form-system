import { create } from "zustand";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  address: string;
  city: string;
  state: string;

  otp: string;

  carsNumber: string;
  expiryDate: string;
  cvv: string;
}

export const useFormStore = create<{
  data: FormData;
  update: (key: keyof FormData, value: string) => void;
  reset: () => void;
}>((set) => ({
  data: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    otp: "",
    carsNumber: "",
    expiryDate: "",
    cvv: "",
  },
  update: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),
  reset: () =>
    set({
      data: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        otp: "",
        carsNumber: "",
        expiryDate: "",
        cvv: "",
      },
    }),
}));
