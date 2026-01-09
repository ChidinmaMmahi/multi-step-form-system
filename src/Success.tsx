import { useNavigate } from "react-router-dom";
import { useFormStore, useStepStore } from "./store";
import { Button } from "./components";

const Success = () => {
  const navigate = useNavigate();
  const { reset: resetForm } = useFormStore();
  const { reset: resetStep } = useStepStore();

  const handleCreateAnother = () => {
    resetForm();
    resetStep();
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <div className="bg-white dark:bg-d-base-100 rounded-xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-black dark:text-white text-2xl font-semibold mb-3">
          Account Created Successfully!
        </h1>
        <p className="mb-6">Your account has been created.</p>
        <Button text="Create Another Account" onClick={handleCreateAnother} />
      </div>
    </div>
  );
};

export default Success;
