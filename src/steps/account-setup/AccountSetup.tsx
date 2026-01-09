import { Input, DefaultLayout } from "../../components";
import { useFormStore } from "../../store";
import { useState, useEffect } from "react";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation";

export const AccountSetup = () => {
  const { data, update } = useFormStore();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email) || "",
      password: validatePassword(data.password) || "",
      confirmPassword:
        validateConfirmPassword(data.password, data.confirmPassword) || "",
    });
  }, [data.email, data.password, data.confirmPassword]);

  const isComplete =
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    data.email &&
    data.password &&
    data.confirmPassword;

  return (
    <DefaultLayout
      title="Account Setup"
      subtitle="Please provide your email address and set a password"
      buttonDisabled={!isComplete}
    >
      <div className="flex flex-col gap-y-4">
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={data.email}
          type="email"
          error={touched.email ? errors.email : ""}
          onChange={(e) => {
            if (!touched.email)
              setTouched((prev) => ({ ...prev, email: true }));
            update("email", e.target.value);
          }}
        />
        <Input
          label="Password"
          placeholder="********"
          value={data.password}
          type="password"
          error={touched.password ? errors.password : ""}
          onChange={(e) => {
            if (!touched.password)
              setTouched((prev) => ({ ...prev, password: true }));
            update("password", e.target.value);
          }}
        />
        {/* Password Requirements */}
        <ul className="text-xs mt-1 ml-1 space-y-1">
          <li
            className={
              data.password.length >= 8 ? "text-primary" : "text-gray-400"
            }
          >
            • At least 8 characters
          </li>
          <li
            className={
              /[A-Z]/.test(data.password) ? "text-primary" : "text-gray-400"
            }
          >
            • An uppercase letter (A-Z)
          </li>
          <li
            className={
              /[a-z]/.test(data.password) ? "text-primary" : "text-gray-400"
            }
          >
            • A lowercase letter (a-z)
          </li>
          <li
            className={
              /[0-9]/.test(data.password) ? "text-primary" : "text-gray-400"
            }
          >
            • A number (0-9)
          </li>
          <li
            className={
              /[^A-Za-z0-9]/.test(data.password)
                ? "text-primary"
                : "text-gray-400"
            }
          >
            • A symbol (e.g. !@#$%)
          </li>
        </ul>
        <Input
          label="Confirm Password"
          placeholder="********"
          value={data.confirmPassword}
          type="password"
          error={touched.confirmPassword ? errors.confirmPassword : ""}
          onChange={(e) => {
            if (!touched.confirmPassword)
              setTouched((prev) => ({ ...prev, confirmPassword: true }));
            update("confirmPassword", e.target.value);
          }}
        />
      </div>
    </DefaultLayout>
  );
};
