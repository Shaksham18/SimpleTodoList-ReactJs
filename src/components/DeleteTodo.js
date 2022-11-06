import React from "react";

export default function DeleteTodo({ todo, setTodos }) {
    function handleDeleteTodo() {
      console.log("Delete")
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
          cursor: "pointer",
          fontSize:"15px"
        }}
      >
        x
      </span>
    );
  }