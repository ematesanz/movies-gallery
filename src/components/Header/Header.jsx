import styles from './Header.module.css';

const Input = ({onChange}) => (
  <div className={styles.search__container}>
    <label htmlFor="seach">Search </label>
    <input
      className={styles.search}
      placeholder="What do you fancy today?"
      onChange={onChange}
    />
  </div>
)

const Favorites = ({onClick}) => (
  <div>
    <img className={`${styles.icon} ${styles.favorites}`} alt="Star" onClick={onClick} />
  </div>
)

const WatchLater = ({onClick}) => (
  <div>
    <img className={`${styles.icon} ${styles['watch-later']}`} alt="Watch later" onClick={onClick} />
  </div>
)

const Clear = ({onClick}) => (
    <div>
      <img className={`${styles.icon} ${styles.clear}`} alt="clear" onClick={onClick} />
    </div>
  )

const searchMovie = (value, data, setSearch, search) => {
  switch(search){
    case 'search':
      setSearch(data.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase())));
    break;
    case 'favorites':
      setSearch(data.filter((movie) => movie.favorite));
    break;
    case 'watchLater':
      setSearch(data.filter((movie) => movie.watchLater));
    break;
    case 'clear':
      setSearch(data);
    break;
    default:
    return;
  }
}


const Header = ({data, setSearch}) => 
  <>
    <div className={styles.header}>
      <Input onChange={event => searchMovie(event.target.value, data, setSearch, 'search')} />
      <Favorites onClick={event => searchMovie(event.target.value, data, setSearch, 'favorites')} />
      <WatchLater onClick={event => searchMovie(event.target.value, data, setSearch, 'watchLater')} />
      <Clear onClick={() => searchMovie('', data, setSearch, 'clear')} />
    </div>
  </>

export default Header;
