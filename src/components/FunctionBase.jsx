import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Todo from "./Todo";

const FunctionBase = () => {
  const [todos, SetTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    SetTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    const editTodos = newTodos[index].text;
    const editedTodo = prompt(editTodos);
    newTodos.splice(index, 1, { text: editedTodo });
    SetTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return alert("todo belum diisi");
    const newTodos = [...todos, { text: value }];
    SetTodos(newTodos);
    setValue("");
  };

  return (
    <div className="container mt-5 py-5 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="todoInput">
          <h2>FunctionBase Todo</h2>
          <Form.Control
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Enter your list"
          />
          <Form.Text className="text-muted">
            add your list of activity and make your better day
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default FunctionBase;
