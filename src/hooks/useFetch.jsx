import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(nul);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await fetch(data);
        if (!request.ok) {
          throw new Error(request.statusText);
        }
        const response = await request.json();
        setData(response);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
};

export { useFetch };
