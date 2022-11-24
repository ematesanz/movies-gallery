import {useState, useEffect} from 'react';
import styles from './App.module.css';
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

const searchMovie = (value, data, setSearch, isSearch) => 
  isSearch ? 
    setSearch(data.filter((movie) => movie.title.includes(value))) : 
    setSearch(data.filter((movie) => movie.favorite))

const Input = ({onChange}) => {
  return (
    <div>
      <label htmlFor="seach">What do you fancy today? </label>
      <input
        id="search"
        placeholder="Smile"
        onChange={onChange}
      />
    </div>
  )
}

const toggleFavorite = (index, setData) => { 
  setData(list => list.map((item, i) =>
    i === index ? { ...item, 'favorite': item.favorite ? !item.favorite : true } : item
  ));
}

const List = ({list, setData}) =>  
  list.map((item, index) => {
  const isFavorite = item.favorite ? "active" : "inactive";
  return (
    <div key={item.key}>
      <h2>{item.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w92${item['poster_path']}`} alt={item.title} />
      <img
            className={styles[isFavorite]}
            alt="star"
            onClick={() => toggleFavorite(index, setData)}
      />
    </div>
  )})

function App() {
  const { loading, data, setData } = useFetchData();
  const [ search, setSearch ] = useState([]);

  if(loading){
    return <p>Loading... </p>
   }
   return (
    <div>
      <Input onChange={event => searchMovie(event.target.value, data, setSearch, true)} />
      <input type="button" value="My Favorites" onClick={event => searchMovie(event.target.value, data, setSearch, false)}/>
      <List list = {search.length ? search : data} setData={setData} />
    </div>
  );

}

export default App;
