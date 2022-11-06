import React from "react";
import DeleteTodo from "./DeleteTodo";

export default function TodoList({ todos, setTodos, _case }) {
    function handleToggleTodo(todo) {
      const updatedTodos = todos.map((t) =>
        t.id === todo.id
          ? {
              ...t,
              done: _case == 'open'?"progress":"closed"
            }
          : t
      );
      setTodos(updatedTodos);
    }
    if (!todos.length) {
      return <center> ---- </center>;
    }
    return (
      <ul className="todolist">
        {todos.map((todo) => {
            if(todo['done'] == _case){
                return (
        
                    <li
                      onDoubleClick={() => handleToggleTodo(todo)}
                      key={todo.id}
                      style={{
                        cursor: "pointer",
                        borderColor: todo['done'] == 'open'? 'orange': todo['done'] == 'progress'? 'lawngreen' : 'crimson'
                      }}
                    >
                      {todo.text}
                      <DeleteTodo todo={todo} setTodos={setTodos} />
                    </li>
                  )
            }
        })}
      </ul>
    );
  }