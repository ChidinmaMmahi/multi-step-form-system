import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersistOptions } from "zustand/middleware";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  otp: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormStore {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  reset: () => void;
}

type PersistedFormStore = PersistOptions<FormStore, FormStore>;

export const useFormStore = create<FormStore>()(
  persist<FormStore>(
    (set) => ({
      data: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        otp: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      },

      update: (key, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [key]: value,
          },
        })),

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
            cardNumber: "",
            expiryDate: "",
            cvv: "",
          },
        }),
    }),
    {
      name: "multi-form-data",
    } as PersistedFormStore
  )
);
