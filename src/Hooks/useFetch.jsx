import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, []);

  return { data };
}

export default useFetch;
