import React, {  useState} from 'react';
import './Todo.css';

const Todo = () => {
 
  let[val,setVal] = useState('');
  let[listItem,setListItem] = useState([]);

  const addTodoHandler= ()=>{
    if(!val){

    }else{
      setListItem([...listItem, val]);
      setVal('');
    }
  }
  const deleteItemHandler = (id)=>{
    const updatedItem = listItem.filter((ele,index)=>{
      return index !== id;
    }
    )
    setListItem(updatedItem);
  }
  return (
    <div className="main">
      <h1>Todo List </h1>
      <br />
      <br />
      <div className="contener">
        <div className="inputs">
          <input
            type="text"
            id="ti"
            placeholder="Enter Todo"
            onInput={(e) => setVal(e.target.value)}
            value={val}
          />
          <button type="button" id="but" onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className="todo-list">
          <ul>
            {listItem.map((el, i) => {
              return (
                <li key={i}>
                  {el}{" "}
                  <span>
                    <button className='delet-button' onClick={() => deleteItemHandler(i)}>Delete</button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo; 
