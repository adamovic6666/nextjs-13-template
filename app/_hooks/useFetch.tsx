"use client";
import { useEffect, useState } from "react";

const useFetch = (url: string): any | null => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [url]);

  return data;
};

export default useFetch;
