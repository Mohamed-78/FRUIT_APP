import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [endpoint, headers]);

  return { data, isLoading, error };
};

export default useFetch;