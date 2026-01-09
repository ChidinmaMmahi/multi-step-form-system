import { StepsContainer } from "./steps";
import { Toaster } from "react-hot-toast";
import Success from "./Success";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 1500,
        }}
      />
      <Routes>
        <Route path="/" element={<StepsContainer />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
