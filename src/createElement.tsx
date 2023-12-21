import './CreateElement.css';
import { useEffect, useRef, useState } from 'react';

type CreateElementProps = {
  store: string[], 
  setMyStore: (elements: string[]) => void
}

function CreateElement(props: CreateElementProps){

const buttonRef = useRef<HTMLButtonElement>(null);
let buttonAdd = buttonRef.current;
  
  const getTodoItem = (): string => {
  let getTask: HTMLInputElement = document.querySelector(".getTask") as HTMLInputElement;
  let data: string = getTask.value;
  getTask.value = '';
  return data;
  }


 function pressKeyEnter (event: any) {
    if(event.keyCode == 13){
      addItem();
    }; 
  }
  
   
  const addItem = (): void => {
    props.setMyStore([getTodoItem(), ...props.store]);
  
  }
  
  return (
    <div className="creater">
      <h2>To do list</h2>
      <input type="text" className="getTask" onKeyDown={pressKeyEnter}/>
      <button ref={buttonRef} onClick={addItem} >Add</button>
    </div>
  )
}
export default CreateElement;