import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Todo = ({ todo, index, removeTodo, editTodo }) => {
  return (
    <div className="border mt-5  text-left p-5 ">
      <h3>{todo.text}</h3>

      <Button variant="info" onClick={() => editTodo(index)}>
        Edit
      </Button>

      <Button
        className="ml-2"
        variant="danger"
        onClick={() => removeTodo(index)}
      >
        Remove
      </Button>
    </div>
  );
};

export default Todo;
