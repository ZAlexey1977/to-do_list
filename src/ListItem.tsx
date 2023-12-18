
import './ListItem.css';
import addItem from './CreateElement';
import { useEffect, useState } from 'react';
// import setItemToLocalStorage from './handler/create';

function ListItem(props: {data: string}){


  return(
    <div className="list">
      <input type='checkbox'/>
      <p>{props.data}</p>
    </div>
  )
}

export default ListItem;