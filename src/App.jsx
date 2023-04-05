import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "./context/useContextHooks";
// pages
import Home from "./pages/Home";

// components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// useFetch
import { useFetch } from "./hooks/useFetch";

function App() {
  const { mode } = useTheme();

  const [url, setUrl] = useState("https://randomuser.me/api/?results=9");
  const { data, setData, error, isPending, refresh, setRefresh } =
    useFetch(url);
  const [newData, setNewData] = useState(data);
  useEffect(() => {
    setNewData(data ? data.results : null);
  }, [data]);

  if (isPending) {
    return (
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className={`App ${mode} `}>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={
              data && (
                <Home
                  data={data}
                  setData={setData}
                  setUrl={setUrl}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  newData={newData}
                  setNewData={setNewData}
                />
              )
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
