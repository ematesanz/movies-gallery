import styles from './List.module.css';

const toggleFavorite = (index, setData) => { 
  setData(list => list.map((item, i) =>
    i === index ? { ...item, 'favorite': item.favorite ? !item.favorite : true } : item
  ));
}

const toggleWatchLater = (index, setData) => { 
  setData(list => list.map((item, i) =>
    i === index ? { ...item, 'watchLater': item.watchLater ? !item.watchLater : true } : item
  ));
}

const List = ({list, setData}) =>  {
  const listItems = list.map((item, index) => {
  const hasFavorite = item.favorite ? 'star--active' : 'star--inactive';
  const hasWatchLater = item.watchLater ? 'watch-later--active' : 'watch-later--inactive';
  const year =  item.release_date ? new Date(item.release_date).getFullYear() : '';
  return (
    <li className={styles.movie} key={item.id}>
      <div className={styles['movie__film-poster']}>
        <img className={styles.movie__img} src={`https://image.tmdb.org/t/p/w300${item['poster_path']}`} alt={item.title} />
      </div>  
      <div className={styles.movie__content}>
        <div className={styles.movie__header}>
          <h1 className={styles.movie__title}>{item.title}</h1>
          <div className={`${styles.movie__tag} ${styles['movie__tag--1']}`}>{year}</div>
          <div className={`${styles.movie__tag} ${styles['movie__tag--2']}`}>{item.vote_average}</div>
          <img className={`${styles.favorite} ${styles[hasFavorite]}`} alt='Favorite' onClick={() => toggleFavorite(index, setData)} />
          <img className={`${styles['watch-later']} ${styles[hasWatchLater]}`} alt='Watch later' onClick={() => toggleWatchLater(index, setData)} />
        </div>
        <p className={styles.movie__description}>{item.overview}</p>
      </div>
    </li>
  )});

  return <ul className={styles.movies}>{listItems}</ul>;
}

export default List;
