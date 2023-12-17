// import { isExportDeclaration } from "typescript";

function setItemToLocalStorage(str: string) {
  let num = localStorage.length + 1;
  let idLS = String(num);
  const data = {
    task: str,
    id: idLS,
  };
  let addToLS = localStorage.setItem(data.id, JSON.stringify(data));
}

export default setItemToLocalStorage;
