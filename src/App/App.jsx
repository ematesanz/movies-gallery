import { useState } from 'react';
import Header from '../components/Header'
import List from '../components/List'
import useFetchData from '../customHooks/useFetchData';

function App() {
  const { loading, data, setData } = useFetchData();
  const [ search, setSearch ] = useState([]);

  if(loading){
    return <p>Loading films... </p>
  }
  return (
    <div id='app'>
      <Header data={data} setSearch={setSearch} />
      <List list = {search.length ? search : data} setData={setData} />
    </div>
  );
}

export default App;
