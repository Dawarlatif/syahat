import { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
