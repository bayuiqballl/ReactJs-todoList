import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export function Todo(props) {
  const Items = props.Items;
  // console.log(Items);
  const todoItem = Items.map((item) => {
    return (
      <div>
        <ListGroup.Item>{item.text}</ListGroup.Item>
      </div>
    );
  });

  return <ListGroup>{todoItem}</ListGroup>;
}

export default Todo;
