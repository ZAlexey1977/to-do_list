import { createElement, useState } from "react";
import "./App.css";
import CreateElement, { ToDoItem } from "./CreateElement";
import Filter from "./Filter";
import ListItem from "./ListItem";

function App() {
  const [myStore, setMyStore] = useState<ToDoItem[]>([]);

  return (
    <div className="App">
      <CreateElement store={myStore} setMyStore={setMyStore} />
      <Filter store={myStore} setMyStore={setMyStore} />
      {myStore.map((el) => (
        <ListItem todoItem={el} key={el.id} />
      ))}
    </div>
  );
}
export default App;
