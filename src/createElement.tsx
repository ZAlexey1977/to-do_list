import "./CreateElement.css";
import { useRef } from "react";

export type ToDoItem = {
  id: number;
  task: string;
  isDone: boolean;
};

type CreateElementProps = {
  store: ToDoItem[];
  setMyStore: (elements: ToDoItem[]) => void;
};

function CreateElement(props: CreateElementProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const getTodoItem = (): string => {
    let data: string = inputRef.current?.value || "";
    return data;
  };

  function pressKeyEnter(event: any) {
    if (event.keyCode === 13) {
      addItem();
    }
  }

  const addItem = (): void => {
    let temp = {
      id: props.store.length,
      task: getTodoItem(),
      isDone: false,
    };
    props.setMyStore([temp, ...props.store]);
  };

  return (
    <div className="creater">
      <h2>To do list</h2>
      <input type="text" ref={inputRef} onKeyDown={pressKeyEnter} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
export default CreateElement;
