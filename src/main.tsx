import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import Layout from "./components/Layout";
import NumberSelector from "./components/NumberSelector";
import "./index.css";

function App() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [dateString, setDateString] = useState("");
  const [dateEvents, setDateEvents] = useState([]);
  const [randomEvent, setRandomEvent] = useState({ description: "", year: "" });
  const [dateEventsCache, setDateEventsCache] = useState<Record<string, any>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);

  const setCurrentMonth = (m: number) => {
    setMonth(m);
    setRandomEvent({ description: "", year: "" });
  };

  const setCurrentDay = (d: number) => {
    setDay(d);
    setRandomEvent({ description: "", year: "" });
  };

  const getFetchData = async () => {
    //check if we already have data for this month/day
    let events = [];
    if (`${month}-${day}` in dateEventsCache) {
      events = dateEventsCache[`${month}-${day}`];
    } else {
      //fetch data from API
      setIsLoading(true);
      const response = await fetch(getApiURL(month, day));
      const data = await response.json();
      events = data.events;
      addToCache(month, day, events);
      setIsLoading(false);
    }
    console.log(Math.floor(Math.random() * dateEvents.length));
    setDateEvents(events);
    setRandomEvent(events[Math.floor(Math.random() * dateEvents.length)]);
    console.log(randomEvent);
    setDateString(getFormattedDate(month, day));
  };

  const addToCache = (m: number, d: number, events: any) => {
    setDateEventsCache((prev) => ({
      ...prev,
      [`${m}-${d}`]: events,
    }));
  };

  return (
    <Layout>
      <h1
        className="text-5xl font-bold text-center pt-10 font-serif text-amber-800"
        style={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          filter: "drop-shadow(1px 1px 2px rgba(120,53,15,0.2))",
        }}
      >
        What happened on my birthdate?
      </h1>
      <div className="flex justify-center mt-4">
        <div className="mr-12">
          <NumberSelector
            min={1}
            max={12}
            title={"Month"}
            onValueChanged={setCurrentMonth}
          />
        </div>
        <div className="ml-12">
          <NumberSelector
            min={1}
            max={getMaxDaysInMonth(month)}
            title={"Day"}
            onValueChanged={setCurrentDay}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-4 text-center">
        {!isLoading ? (
          <div>
            <button
              className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 hover:from-yellow-100 hover:via-amber-100 hover:to-orange-150 text-amber-800 font-semibold py-3 px-8 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none active:scale-[0.98] overflow-hidden"
              onClick={getFetchData}
              style={{
                borderRadius: "12px 8px 15px 6px",
                border: "1px solid rgba(146, 64, 14, 0.3)",
                transform: "rotate(-0.5deg)",
                boxShadow:
                  "2px 3px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(217,119,6,0.08) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(180,83,9,0.06) 0%, transparent 40%),
                  radial-gradient(circle at 50% 90%, rgba(146,64,14,0.04) 0%, transparent 30%)
                `,
              }}
            >
              <span className="relative z-10 text-base tracking-normal">
                Discover what happened!
              </span>
            </button>
          </div>
        ) : (
          <div>
            <button
              className="relative bg-gradient-to-br from-yellow-100/70 via-amber-100/70 to-orange-200/70 text-amber-600 font-semibold py-3 px-8 cursor-not-allowed opacity-70 overflow-hidden"
              disabled
              style={{
                borderRadius: "12px 8px 15px 6px",
                border: "1px solid rgba(146, 64, 14, 0.2)",
                transform: "rotate(-0.5deg)",
                boxShadow: "1px 2px 4px rgba(0,0,0,0.1)",
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(217,119,6,0.04) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(180,83,9,0.03) 0%, transparent 40%)
                `,
              }}
            >
              <div className="flex items-center justify-center space-x-2 relative z-10">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-600 border-t-transparent opacity-80"></div>
                <span className="text-base">Searching through time...</span>
              </div>
            </button>
          </div>
        )}
        {randomEvent && randomEvent.description && (
          <div className="mt-8 space-y-4">
            <div>
              <span
                className="text-2xl font-serif text-amber-700 relative inline-block"
                style={{
                  transform: "rotate(-0.2deg)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  filter: "drop-shadow(0 1px 2px rgba(120,53,15,0.2))",
                }}
              >
                One random event that happened on
              </span>
              <br></br>
              <div
                className="text-4xl font-bold relative inline-block"
                style={{
                  transform: "rotate(-0.5deg)",
                }}
              >
                <div
                  className="absolute inset-0 font-serif tracking-wide text-amber-900"
                  style={{
                    transform: "translate(3px, 3px)",
                    opacity: 0.3,
                    filter: "blur(1px)",
                  }}
                >
                  <span>{getFormattedDate(month, day)}</span>
                  <span className="mx-2">—</span>
                  <span>{randomEvent.year}</span>
                </div>

                <div
                  className="absolute inset-0 font-serif tracking-wide text-amber-800"
                  style={{
                    transform: "translate(2px, 2px)",
                    opacity: 0.4,
                  }}
                >
                  <span>{getFormattedDate(month, day)}</span>
                  <span className="mx-2">—</span>
                  <span>{randomEvent.year}</span>
                </div>

                <div
                  className="relative z-10 font-serif tracking-wide bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <span>{getFormattedDate(month, day)}</span>
                  <span className="mx-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                    —
                  </span>
                  <span>{randomEvent.year}</span>
                </div>

                <div
                  className="absolute inset-0 font-serif tracking-wide text-yellow-200"
                  style={{
                    transform: "translate(-1px, -1px)",
                    opacity: 0.6,
                    mixBlendMode: "overlay",
                  }}
                >
                  <span>{getFormattedDate(month, day)}</span>
                  <span className="mx-2">—</span>
                  <span>{randomEvent.year}</span>
                </div>

                <div
                  className="absolute inset-0 -z-10 opacity-15"
                  style={{
                    background: `
                      radial-gradient(ellipse at 20% 30%, rgba(217,119,6,0.2) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 70%, rgba(180,83,9,0.15) 0%, transparent 50%)
                    `,
                    transform: "scale(1.2) rotate(0.3deg)",
                    borderRadius: "12px",
                    filter: "blur(2px)",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="text-2xl font-serif text-amber-800 leading-relaxed relative p-6 mx-4"
              style={{
                transform: "rotate(0.3deg)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
              }}
            >
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 opacity-80"
                style={{
                  borderRadius: "15px 8px 12px 10px",
                  border: "1px solid rgba(146, 64, 14, 0.2)",
                  boxShadow:
                    "2px 3px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
                  backgroundImage: `
                    radial-gradient(circle at 15% 25%, rgba(217,119,6,0.06) 0%, transparent 50%),
                    radial-gradient(circle at 85% 75%, rgba(180,83,9,0.04) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(146,64,14,0.03) 0%, transparent 30%)
                  `,
                }}
              ></div>

              <span className="relative z-10 block">
                {randomEvent.description}
              </span>

              <div
                className="absolute top-2 right-2 text-amber-600 opacity-30"
                style={{ transform: "rotate(15deg)" }}
              >
                ✦
              </div>
            </div>
          </div>
        )}
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

function getFormattedDate(m: number, d: number): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[m - 1]} ${d}`;
}
const getApiURL = (m: number, d: number) =>
  `https://byabbe.se/on-this-day/${m}/${d}/events.json`;
