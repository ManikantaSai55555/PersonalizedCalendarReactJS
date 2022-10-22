import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import "../App.css"

function TextArea({ date }) {
  const task = useRef();
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.push({ date: { date }, item: task.current.value, check: false });
    setTodos(newTodos);
    task.current.value = "";
  };
  const handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].check = !newTodos[index].check;
    setTodos(newTodos);
  };
  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        {console.log("in the textarea")}
        <div className="card">
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <input ref={task} size="30" type="text" name="task" />{" "}
              &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form><br/>
            {/* {console.log("date in text area :", date)} */}
            <table className="list">
                <tbody>
              <TodoList
                todolist={todos}
                handleCheck={handleCheck}
                deleteHandler={deleteHandler}
                date={date}
              />
              </tbody>
            </table>
          </div>
        </div>
      </center>
    </div>
  );
}

export default TextArea;
