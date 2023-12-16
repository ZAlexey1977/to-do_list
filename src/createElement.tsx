import './CreateElement.css';

function CreateElement(){
  return (
    <div className="creater">
      <h2>To do list</h2>
      <input type="text" value={'some text'}/>
      <button>Add</button>

    </div>
  )
}
export default CreateElement;