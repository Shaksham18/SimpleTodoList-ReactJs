import React from "react";

export default function AddTodo({ setTodos, idc, setIdc }) {
    const inputRef = React.useRef();
    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: idc,
        text: text,
        done: 'open'
      };
      setIdc((prevIdc) => {
        return prevIdc + 1;
      });
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
      inputRef.current.value = "";
    }
  
    return (
      <form onSubmit={handleAddTodo} id="addTodoForm">
        <input placeholder="Add Task Here, Press Enter |  Double click task card to update task status" name="addTodo" ref={inputRef} />
        {/* <button type="submit">Submit</button> */}
      </form>
    );
  }