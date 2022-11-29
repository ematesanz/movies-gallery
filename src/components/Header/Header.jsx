import styles from './Header.module.css';

const Input = ({onChange}) => {
  return (
    <div>
      <label htmlFor="seach">Search </label>
      <input
        className={styles.search}
        placeholder="What do you fancy today? "
        onChange={onChange}
      />
    </div>
  )
}

const Favorites = ({onClick}) => {
  return (
    <div>
      <img className={`${styles.favorites} ${styles.active}`} alt="star" onClick={onClick} />
    </div>
  )
}

const searchMovie = (value, data, setSearch, isSearch) => 
  isSearch ? 
    setSearch(data.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()))) : 
    setSearch(data.filter((movie) => movie.favorite))

const Header = ({data, setSearch}) => 
  <>
    <div className={styles.header}>
      <Input onChange={event => searchMovie(event.target.value, data, setSearch, true)} />
      <Favorites onClick={event => searchMovie(event.target.value, data, setSearch, false)} />
    </div>
  </>

export default Header;
