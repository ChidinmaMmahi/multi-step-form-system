import { Input, DefaultLayout, Button } from "../../components";
import { useFormStore } from "../../store/formStore";
import { generateOtp } from "../../utils";

import { Modal } from "../../components";
import { useEffect, useState } from "react";

export const Verification = () => {
  const { data, update } = useFormStore();
  const [showOtpModal, setShowOtpModal] = useState(false);

  useEffect(() => {
    if (!data.isPhoneVerified && !data.generatedOtp && data.phone) {
      const otp = generateOtp();
      update("generatedOtp", otp);
      setShowOtpModal(true);
    }
  }, [data.isPhoneVerified, data.generatedOtp, data.phone]);

  const isOtpValid = data.otp.length === 6 && data.otp === data.generatedOtp;

  useEffect(() => {
    if (isOtpValid) {
      update("isPhoneVerified", true);
    }
  }, [isOtpValid]);

  const handleResendOtp = () => {
    const newOtp = generateOtp();
    update("generatedOtp", newOtp);
    update("otp", "");
    setShowOtpModal(true);
  };

  const handleClose = () => {
    setShowOtpModal(false);
  };

  return (
    <div>
      <DefaultLayout title="Phone Verification" buttonDisabled={!isOtpValid}>
        <Input
          placeholder="Enter otp"
          onChange={(e) => update("otp", e.target.value)}
        />
        <div className="flex justify-end mt-1">
          <Button text="Resend OTP" variant="link" onClick={handleResendOtp} />
        </div>
      </DefaultLayout>
      {showOtpModal && (
        <Modal
          title="Your verification code"
          content={data.generatedOtp}
          type="alert"
          buttonType="copy"
          onClose={handleClose}
        />
      )}
    </div>
  );
};
