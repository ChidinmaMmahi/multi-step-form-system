import { create } from "zustand";

interface StepState {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
  nextStep: () => void;
  prevStep: () => void;
  markCompleted: (step: number) => void;
  goToStep: (step: number) => void;
}

export const useStepStore = create<StepState>((set, get) => ({
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
}));
