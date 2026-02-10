## Multi-Step Account Creation Form

A responsive, multi-step account creation flow built with **React**, **TypeScript**, and **Vite**.  
The app guides a user through:

- Account setup (email + secure password)
- Profile information
- Contact details
- Phone verification via OTP
- Final summary
- Success screen with the option to start a new account creation.

State is managed with **Zustand** (persisted in `localStorage`), and navigation is handled with **React Router**.

---

## Features

- **Multi-step wizard**
  - 5 steps managed via a centralized step store: `AccountSetup`, `ProfileInfo`, `ContactDetails`, `Verification`, `Summary`.
  - Step progress stored in a persisted `useStepStore`.

- **Form state persistence**
  - All form data is stored in a `useFormStore` Zustand store and persisted with the key `multi-form-data`.
  - Users can refresh the page without losing their progress.

- **Validation**
  - Centralized validation utilities in `src/utils/validation.ts`.
  - **Email**
    - Required.
    - Must match a standard email pattern (`name@domain.tld`).
  - **Password**
    - Required.
    - At least 8 characters.
    - Must contain:
      - At least one uppercase letter.
      - At least one lowercase letter.
      - At least one number.
      - At least one symbol.
    - Live requirement list displayed under the password field.
    - Errors are only shown after the user has interacted with the field.
  - **Confirm Password**
    - Required.
    - Must match the password exactly.
  - **Phone Number**
    - Required.
    - Only numeric input allowed.
    - Input is restricted to a maximum of 12 digits (extra digits are ignored).
    - Errors are shown only after the field is touched.

- **Phone verification (OTP)**
  - On the verification step, an OTP is generated (`generateOtp`) when a phone number exists and is not yet verified.
  - User enters a 6-digit OTP.
  - When the OTP matches the generated OTP, `isPhoneVerified` is set to `true` in the form store.
  - Includes a **Resend OTP** button that regenerates and shows a new OTP in a modal.

- **Success flow**
  - After the final step is submitted, the user is navigated to `/success`.
  - `Success` page shows a confirmation message and a **Create Another Account** button.
  - Clicking the button:
    - Resets the form store (`useFormStore.reset()`).
    - Resets the step store (`useStepStore.reset()`).
    - Navigates back to the start (`/`), beginning from step 1.

- **Theming & UI**
  - Custom color theme defined via Tailwind’s `@theme` in `src/index.css`.
  - Primary palette based on:
    - `#fff5f5` (light background)
    - `#859f21` / `#a8c92a` (primary accents)
    - `#1a8b9d` (secondary accents)
    - `#000000` / `#ffffff` (text colors)
  - Light and dark modes via a `ThemeProvider` and `ThemeSwitch` component.
  - Background images are served from `public/background` and are preserved as-is.

- **Reusable components**
  - `Input` component with support for:
    - Standard text, email, password, date, tel types.
    - Radio options (for gender selection).
    - Inline error messages, shown under each field.
  - `Button` component with `primary`, `secondary`, and `link` variants.
  - `DefaultLayout` and `FormLayout` for consistent structure across steps.
  - `Modal` component for OTP and status messages.
  - `Stepper` to visualize the current step.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand (with `persist` middleware)
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`) + custom CSS variables
- **Notifications:** `react-hot-toast`
- **Icons:** `react-icons`

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
git clone <repo-url>
cd multi-step-form-sytem
npm install
```

### Run the app in development

```bash
npm run dev
```

By default, Vite will start the app at `http://localhost:5173` (or the next available port).

### Build for production

```bash
npm run build
```

The built assets will be output to the `dist` directory.

### Preview the production build

```bash
npm run preview
```

---

## Application Structure (High-Level)

- `src/main.tsx`  
  - Bootstraps React with `ThemeProvider` and `BrowserRouter`.

- `src/App.tsx`  
  - Defines routes:
    - `/` → `StepsContainer` (multi-step form)
    - `/success` → `Success` (completion page)

- `src/steps`  
  - `AccountSetup.tsx` – email + password setup with strong validation.
  - `ProfileInfo.tsx` – name, gender, and date of birth.
  - `ContactDetails.tsx` – phone (with numeric/length enforcement) and address.
  - `Verification.tsx` – phone verification via OTP.
  - `Summary.tsx` – read-only summary of all entered data.

- `src/store`  
  - `formStore.ts` – all form fields, OTP state, success flag.
  - `stepStore.ts` – current step, total steps, step completion, and reset.

- `src/components`  
  - `form-controls` – `Input`, `Button`.
  - `layouts` – `DefaultLayout`, `FormLayout`.
  - `Stepper`, `Modal`, `ThemeSwitch`, etc.

- `src/utils/validation.ts`  
  - Email, password, confirm password, and phone validators.

---

## Validation Summary

- **Email**
  - Required.
  - Must be a properly formatted email string.

- **Password**
  - Required.
  - Minimum length: 8.
  - Must include uppercase, lowercase, digit, and symbol.

- **Confirm Password**
  - Required.
  - Must match the password field.

- **Phone**
  - Required.
  - Numbers only.
  - Input constrained to 12 digits maximum.

Error messages are **only shown after the user interacts with the respective field**, providing a user-friendly validation experience.

---

## Notes

- Because this project uses `localStorage` for persistence:
  - Each browser/device has its own independent form state.
  - Refreshing the page will keep the current form progress.
  - The **"Create Another Account"** button on the success page is the primary way to clear and restart the flow.

Feel free to extend this project with real API calls, server-side persistence, or additional steps and validations as needed.
