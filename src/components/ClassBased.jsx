import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Todo from "./Todo";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  removeTodo(index) {
    const filteredTodos = this.state.todos.filter(
      (todos) => todos.index !== index
    );
    this.setState({
      todos: filteredTodos,
    });
  }

  editTodo = (value, index) => {
    const todos = this.state.todos;
    todos.map((todo) => {
      if (todo.index === index) {
        todo.value = value;
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = this.state;
    if (!this.state.value) return alert("todo belum diisi");
    const todos = [...this.state.todos, this.state.value];
    this.setState({
      todos: todos,
      value: "",
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="container mt-5 p-5 ">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="todoInput">
            <h2>ClassBase Todo</h2>
            <Form.Control
              value={this.state.value}
              onChange={this.handleChange}
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

        <ListTodos
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

function ListTodos(props) {
  const todos = props.todos;
  const listTodos = todos.map((todo) => {
    return (
      <div className="border mt-5  text-left p-5 ">
        <h3 key={todo.index}>{todo}</h3>
        <Button
          variant="info"
          value={todo}
          key={todo.index}
          onClick={(event) => {
            props.editTodo(event.target.value, todo.index);
          }}
        >
          Edit
        </Button>

        <Button
          className="ml-2"
          variant="danger"
          onClick={() => props.removeTodo(todo.index)}
        >
          Remove
        </Button>
      </div>
    );
  });
  console.log(listTodos);
  return <div>{listTodos}</div>;
}

export default ClassBased;
