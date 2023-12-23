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
  function getDoneItem(): void {
    let taskDone: ToDoItem[] = [];
    let taskWaiting: ToDoItem[] = [];
    props.store.map((el) => {
      if (el.isDone == true) {
        taskDone.push(el);
      } else {
        taskWaiting.push(el);
      }

      props.setMyStore([...taskDone, ...taskWaiting]);
    });
  }

  function getWaitItem(): void {
    let taskDone: ToDoItem[] = [];
    let taskWaiting: ToDoItem[] = [];
    props.store.map((el) => {
      if (el.isDone == true) {
        taskDone.push(el);
      } else {
        taskWaiting.push(el);
      }

      props.setMyStore([...taskWaiting, ...taskDone]);
    });
  }

  function getAllItems(): void {
    let temp: ToDoItem[] = [];
    props.store.map((el) => {
      temp[el.id] = el;
    });
    temp.reverse();
    console.log(temp);
    props.setMyStore(temp);
  }

  return (
    <div className="filter">
      <button onClick={getAllItems}>All</button>
      <button onClick={getDoneItem}>Done</button>
      <button onClick={getWaitItem}>Waiting</button>
    </div>
  );
}
export default Filter;
