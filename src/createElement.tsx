import './CreateElement.css';

type CreateElementProps = {
  store: string[], 
  setMyStore: (elements: string[]) => void
}

function CreateElement(props: CreateElementProps){


  
  const getTodoItem = (): string => {
  let getTask: HTMLInputElement = document.querySelector(".getTask") as HTMLInputElement;
  let data: string = getTask.value;
  return data;
  }
   
  const addItem = (): void => {
    props.setMyStore([...props.store, getTodoItem()]);
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