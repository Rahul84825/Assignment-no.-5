import { useEffect, useState } from "react";

function useFetch(url) {
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  async function fetchData(url){
    setLoading(true);
    setError(null);

    try{
      const res = await fetch(url);

      if(!res.ok){
        throw new Error("Something went wrong!");
      }
      const result = await res.json();
      setData(result);
    }catch(err){
      setError(err.message);
      console.log(err);
    }
    setLoading(false);
  }

  return {data, loading, error};
}

export default useFetch;