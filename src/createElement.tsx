import './CreateElement.css';
 //import setItemToLocalStorage from './handler/create';

function CreateElement(){
  
  const getTodoItem = (): string => {
  let getTask: HTMLInputElement = document.querySelector(".getTask") as HTMLInputElement;
  let data: string = getTask.value;
  return data;
  }
   
  const addItem = () => {
    localStorage.setItem(String(localStorage.length), getTodoItem());
  }

  return (
    <div className="creater">
      <h2>To do list</h2>
      <input type="text" className="getTask" />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
export default CreateElement;