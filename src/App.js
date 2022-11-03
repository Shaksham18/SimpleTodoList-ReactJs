import "./styles.css";
import React from "react";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [idc, setIdc] = React.useState(1);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} idc={idc} setIdc={setIdc} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    setTodos(updatedTodos);
  }
  if (!todos.length) {
    return <p>No todos left!</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          key={todo.id}
          style={{
            textDecoration: todo.done ? "line-through" : "",
            cursor: "pointer"
          }}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos, idc, setIdc }) {
  const inputRef = React.useRef();
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: idc,
      text: text,
      done: false
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
    <form onSubmit={handleAddTodo}>
      <input placeholder="Add Todo" name="addTodo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}