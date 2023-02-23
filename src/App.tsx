import { useState } from "react";
import "./App.css";
import { useCustomModal } from "./components/CustomModalContainer/Container";
import { useToast } from "./components/Toast/Container";

function App() {
  const customModal = useCustomModal();
  const toast = useToast();
  const [count, setCount] = useState(0);

  const openModal = () => {
    customModal.add(() => console.log("success"));
  };

  const showToast = () => {
    toast({ label: `message ${count}`, type: "info" });
    setCount(count + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>tests:</h1>
      <button onClick={openModal}>modal</button>
      <button onClick={showToast}>toast</button>
    </div>
  );
}

export default App;
