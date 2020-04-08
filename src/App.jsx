import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Todo from "./components/Todo";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      listItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.listItem;
    console.log(newItem);
    if (newItem.text != "") {
      const Items = [...this.state.Items, newItem];
      this.setState({
        items: Items,
        listItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  handleInput(e) {
    this.setState({
      listItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Navigation />;
        <div className="container mt-5 p-5 ">
          <Form onSubmit={this.addItem}>
            <Form.Group controlId="todoInput">
              <Form.Control
                value={this.state.listItem.text}
                onChange={this.handleInput}
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
        </div>
        {this.state.Items.text}
        <Todo Items={this.state.Items} />
      </div>
    );
  }
}

export default App;
