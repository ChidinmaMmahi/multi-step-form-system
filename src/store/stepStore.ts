import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersistOptions } from "zustand/middleware";

interface StepStore {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];

  markCompleted: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

type PersistedStepStore = PersistOptions<StepStore, StepStore>;

export const useStepStore = create<StepStore>()(
  persist<StepStore>(
    (set, get) => ({
      currentStep: 1,
      totalSteps: 4,
      completedSteps: [],

      markCompleted: (step) => {
        const completed = get().completedSteps;
        if (!completed.includes(step)) {
          set({ completedSteps: [...completed, step] });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps, markCompleted } = get();
        markCompleted(currentStep);

        if (currentStep < totalSteps) {
          set({ currentStep: currentStep + 1 });
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      goToStep: (step) => {
        const { totalSteps } = get();
        if (step >= 1 && step <= totalSteps) {
          set({ currentStep: step });
        }
      },
    }),
    {
      name: "multi-form-step",
    } as PersistedStepStore
  )
);
