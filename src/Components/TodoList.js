import React from "react";
import "../App.css";

function TodoList({ todolist, handleCheck, deleteHandler, date }) {
  const list = todolist.map((todo, index) => {
    if (todo.date.date === date) {
      return (
        <tr className={todo.check ? "done" : ""} key={index}>
            <td>
            <input
              type="checkbox"
              name={todo.item}
              value={todo.item}
              checked={todo.check}
              onChange={() => handleCheck(index)}
            />
          </td>
          <td
              className={todo.check ? "strike" : "unstrike"}>
            <label htmlFor={todo.item}>{todo.item}</label>
          </td>
          <td>
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </td>
        </tr>
      );
    }
    return null;
  });
  return list;
}

export default TodoList;
