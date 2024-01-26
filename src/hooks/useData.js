import { useState, useEffect } from 'react';
import jsonObj from "../data.json"

const useData = (page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(jsonObj)
        setData(jsonObj[page]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  return { loading, error, data };
};

export default useData;
