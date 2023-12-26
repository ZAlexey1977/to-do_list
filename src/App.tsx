import { useEffect, useRef, useState } from "react";
import "./App.css";
import CreateElement, { ToDoItem } from "./CreateElement";
import Filter from "./Filter";
import ListItem from "./ListItem";
import { convertCompilerOptionsFromJson } from "typescript";

function App() {
  const [myStore, setMyStore] = useState<ToDoItem[]>([]);

  useEffect(() => {
    setMyStore(JSON.parse(localStorage.getItem("data") || "[]"));
    console.log(myStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(myStore));
  }, [myStore]);

  return (
    <div className="App">
      <CreateElement store={myStore} setMyStore={setMyStore} />
      <Filter store={myStore} setMyStore={setMyStore} />
      {myStore.map((el, index) => (
        <ListItem
          todoItem={el}
          index={index}
          key={el.id}
          store={myStore}
          setMyStore={setMyStore}
        />
      ))}
    </div>
  );
}
export default App;
