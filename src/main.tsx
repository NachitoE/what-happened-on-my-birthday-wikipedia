import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import Layout from "./components/Layout";
import NumberSelector from "./components/NumberSelector";
import "./index.css";

function App() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const setCurrentMonth = (m: number) => {
    setMonth(m);
  };
  const setCurrentDay = (d: number) => {
    setDay(d);
  };

  return (
    <Layout>
      <h1 className="text-5xl font-bold justify-center-safe text-center font-cosette-titre">
        What happened on my birthdate?
      </h1>
      <div className="flex justify-center mt-4">
        <NumberSelector
          min={1}
          max={12}
          title={"Month"}
          onValueChanged={setCurrentMonth}
        />
        <NumberSelector
          min={1}
          max={getMaxDaysInMonth(month)}
          title={"Day"}
          onValueChanged={setCurrentDay}
        />
      </div>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function getMaxDaysInMonth(month: number): number {
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30Days = [4, 6, 9, 11];

  if (monthsWith31Days.includes(month)) {
    return 31;
  } else if (monthsWith30Days.includes(month)) {
    return 30;
  } else if (month === 2) {
    return 29;
  }

  return 31;
}
