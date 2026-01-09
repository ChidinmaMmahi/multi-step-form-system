import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersistOptions } from "zustand/middleware";

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;

  firstName: string;
  lastName: string;
  gender: "" | "male" | "female" | "other";
  dob: string;

  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;

  otp: string;
  generatedOtp: string;
  isPhoneVerified: boolean;

  isAccountSuccess: boolean;
}

interface FormStore {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  updatePhone: (phone: string) => void;
  reset: () => void;
}

type PersistedFormStore = PersistOptions<FormStore, FormStore>;

export const useFormStore = create<FormStore>()(
  persist<FormStore>(
    (set) => ({
      data: {
        email: "",
        password: "",
        confirmPassword: "",

        firstName: "",
        lastName: "",
        gender: "",
        dob: "",

        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",

        otp: "",
        generatedOtp: "",
        isPhoneVerified: false,

        isAccountSuccess: false,
      },

      update: (key, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [key]: value,
          },
        })),

      updatePhone: (phone: string) =>
        set((state) => ({
          data: {
            ...state.data,
            phone,
            otp: "",
            generatedOtp: "",
            isPhoneVerified: false,
          },
        })),

      reset: () =>
        set({
          data: {
            email: "",
            password: "",
            confirmPassword: "",

            firstName: "",
            lastName: "",
            gender: "",
            dob: "",

            phone: "",
            address: "",
            city: "",
            state: "",
            country: "",

            otp: "",
            generatedOtp: "",
            isPhoneVerified: false,

            isAccountSuccess: false,
          },
        }),
    }),
    {
      name: "multi-form-data",
    } as PersistedFormStore
  )
);
