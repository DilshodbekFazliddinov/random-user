import React from "react";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIspending(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setIspending(false);
      }
    };
    FetchData();
  }, [url, refresh]);
  return { setData, data, error, isPending, refresh, setRefresh };
}

export { useFetch };
