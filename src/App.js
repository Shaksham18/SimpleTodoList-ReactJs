import "./styles.css";
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from  "./components/AddTodo";
import Sidebar from  "./components/Sidebar";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [idc, setIdc] = React.useState(1);

  return (
    <div className="App">
      <Sidebar />
      <div>
        <div className="addTodo">
          <AddTodo setTodos={setTodos} idc={idc} setIdc={setIdc} />
        </div>
        <div className="container">
          <div className="open">
            <center><h1>Open Task</h1></center>
            <TodoList todos={todos} setTodos={setTodos} _case="open"/>
          </div>
          <div className="progress">
            <center><h1>In Progress</h1></center>
            <TodoList todos={todos} setTodos={setTodos} _case="progress"/>
          </div>
          <div className="closed">
            <center><h1>Closed</h1></center>
            <TodoList todos={todos} setTodos={setTodos} _case="closed"/>
          </div>
        </div>
      </div>
    </div>
  );
}

