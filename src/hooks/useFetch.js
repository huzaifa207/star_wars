import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const temp_data = await response.json();
    setData(temp_data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { data, loading };
};
