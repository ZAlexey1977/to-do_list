import { createElement, useState } from 'react';
import './App.css';
import CreateElement from './CreateElement';
import Filter from './Filter';
import ListItem from './ListItem';

function App() {
  const [myStore, setMyStore] = useState<string[]>([]);
  
  return (
    <div className="App">
     <CreateElement store={myStore} setMyStore={setMyStore}/>
     <Filter />
     {myStore.map((el) => 
     <ListItem data={el} key={el}/>
     )}
    </div>
  );
}
export default App;
