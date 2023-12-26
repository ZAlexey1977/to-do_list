import { useEffect, useRef } from "react";
import "./Filter.css";

export type ToDoItem = {
  id: number;
  task: string;
  isDone: boolean;
};

type FilterElementProps = {
  store: ToDoItem[];
  setMyStore: (elements: ToDoItem[]) => void;
};

function Filter(props: FilterElementProps) {
  const allRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const waitingRef = useRef<HTMLButtonElement>(null);

  const checkButtonClass = (data: React.RefObject<HTMLButtonElement>) => {
    let buttonsRef = [waitingRef, doneRef, allRef];
    for (let i = 0; i < buttonsRef.length; i++) {
      if (data == buttonsRef[i]) {
        buttonsRef[i].current?.classList.add("checkButoon");
      } else {
        buttonsRef[i].current?.classList.remove("checkButoon");
      }
    }
  };

  function getDoneItem(): void {
    let taskDone: ToDoItem[] = [];
    let taskWaiting: ToDoItem[] = [];
    props.store.forEach((el) => {
      if (el.isDone === true) {
        taskDone.push(el);
      } else {
        taskWaiting.push(el);
      }

      props.setMyStore([...taskDone, ...taskWaiting]);
    });
    checkButtonClass(doneRef);
  }

  function getWaitItem(): void {
    let taskDone: ToDoItem[] = [];
    let taskWaiting: ToDoItem[] = [];
    props.store.forEach((el) => {
      if (el.isDone === true) {
        taskDone.push(el);
      } else {
        taskWaiting.push(el);
      }
      props.setMyStore([...taskWaiting, ...taskDone]);
    });
    checkButtonClass(waitingRef);
  }

  function getAllItems(): void {
    let temp: ToDoItem[] = [];
    props.store.forEach((el) => {
      temp[el.id] = el;
    });
    temp.reverse();
    props.setMyStore(temp);
    checkButtonClass(allRef);
  }

  return (
    <div className="filter">
      <button ref={allRef} onClick={getAllItems}>
        All
      </button>
      <button ref={doneRef} onClick={getDoneItem}>
        Done
      </button>
      <button ref={waitingRef} onClick={getWaitItem}>
        Waiting
      </button>
    </div>
  );
}
export default Filter;
