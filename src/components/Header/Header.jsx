import styles from './Header.module.css';

const Input = ({onChange}) => {
  return (
    <div className={styles.search__container}>
      <label htmlFor="seach">Search </label>
      <input
        className={styles.search}
        placeholder="What do you fancy today?"
        onChange={onChange}
      />
    </div>
  )
}

const Favorites = ({onClick}) => {
  return (
    <div>
      <img className={`${styles.icon} ${styles['star']}`} alt="star" onClick={onClick} />
    </div>
  )
}

const WatchLater = ({onClick}) => {
  return (
    <div>
      <img className={`${styles.icon} ${styles['watch-later']}`} alt="star" onClick={onClick} />
    </div>
  )
}


const searchMovie = (value, data, setSearch, search) => {
  switch(search){
    case 'search':
      setSearch(data.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase())));
    break;
    case 'favorites':
      setSearch(data.filter((movie) => movie.favorite))
    break;
    case 'watchLater':
      setSearch(data.filter((movie) => movie.watchLater))
    break;
    default:
    return;
  }
}


const Header = ({data, search, setSearch}) => 
  <>
    <div className={styles.header}>
      <Input onChange={event => searchMovie(event.target.value, data, setSearch, 'search')} />
      <Favorites onClick={event => searchMovie(event.target.value, data, setSearch, 'favorites')} />
      <WatchLater onClick={event => searchMovie(event.target.value, data, setSearch, 'watchLater')} />
    </div>
  </>

export default Header;
