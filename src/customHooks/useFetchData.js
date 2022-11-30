import { useState, useEffect } from 'react';
import { API_KEY } from '../utils/constants';

function useFetchData() {
    const [loading, setLoading] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
        .then((data) => data.json())
        .then((movies) => {
          setData(movies.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    return { loading, data, setData };
  }

  export default useFetchData;
