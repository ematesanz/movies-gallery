import { useState, useEffect } from 'react';
import Header from './components/Header'
import List from './components/List'

import styles from './components/Header/Header.module.css';
const API_KEY = 'fc0d92f47110bc6797816aec0da90d03'

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

function App() {
  const { loading, data, setData } = useFetchData();
  const [ search, setSearch ] = useState([]);

  if(loading){
    return <p>Loading... </p>
  }
  return (
    <div>
      <Header data={data} setSearch={setSearch} />
      <List className={styles.movies_list} list = {search.length ? search : data} setData={setData} />
    </div>
  );
}

export default App;
