
import './ListItem.css';
import { useEffect, useRef, useState } from 'react';
import { ToDoItem } from './CreateElement';

function ListItem(props: {todoItem: ToDoItem}){
  const checkboxRef = useRef<HTMLInputElement>(null);
  const paragrafRef = useRef<HTMLParagraphElement>(null);

  function checkTaskDone( ): void{
    let checkedInput = checkboxRef.current;
    let checkedPar = paragrafRef.current;

    if (checkedInput?.checked){
      checkedPar?.classList.add('done');
    } else {
      checkedPar?.classList.remove('done');
    }
  }

  return(
    <div className="list">
      <input ref={checkboxRef} type='checkbox' onChange={checkTaskDone}/>
      <p ref={paragrafRef}>{props.todoItem.task}</p>
    </div>
  )
}

export default ListItem;