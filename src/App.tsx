import { StepsContainer } from "./steps";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 1500,
        }}
      />
      <StepsContainer />
    </div>
  );
}

export default App;
