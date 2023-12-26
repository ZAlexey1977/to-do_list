import "./ListItem.css";
import { useRef } from "react";
import { ToDoItem } from "./CreateElement";

type ListElementProps = {
  todoItem: ToDoItem;
  index: number;
  store: ToDoItem[];
  setMyStore: (elements: ToDoItem[]) => void;
};

function ListItem(props: ListElementProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const taskClassName = props.todoItem.isDone ? "done" : "";

  function checkTaskDone(): void {
    let checkedInput = checkboxRef.current;

    const currentItem: ToDoItem = {
      ...props.todoItem,
      isDone: !!checkedInput?.checked,
    };
    props.store[props.index] = currentItem;
    props.setMyStore([...props.store]);
  }

  return (
    <div className="list">
      <input
        ref={checkboxRef}
        type="checkbox"
        onChange={checkTaskDone}
        checked={props.todoItem.isDone}
      />
      <p className={taskClassName}>{props.todoItem.task}</p>
    </div>
  );
}

export default ListItem;
