
import './List.css';
import addItem from './CreateElement';
import { useEffect, useState } from 'react';
// import setItemToLocalStorage from './handler/create';

function List(){

let data = () => {
  addItem()
}
  return(
    <div className="list">
      <input type='checkbox'/>
      <p>{'data'}</p>
    </div>
  )
}

export default List;