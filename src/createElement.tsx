import './CreateElement.css';
 import setItemToLocalStorage from './handler/create';

function CreateElement(){

  const getTodoItem = (): string => {
  let getTask: HTMLInputElement = document.querySelector(".getTask") as HTMLInputElement;
  return getTask.value;
  }
   
  const addItem = () => {
    setItemToLocalStorage(getTodoItem());
  }

  return (
    <div className="creater">
      <h2>To do list</h2>
      <input type="text" className="getTask" value='some text'/>
      <button onClick={addItem}>Add</button>
    </div>
  )
}
export default CreateElement;