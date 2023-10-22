import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Restcard(props) {
  return (
    <Link style={{textDecoration:"none"}} to={`restaurant/${props.item.id}`}>
      <Card className="my-3 p-3 rounded">
        <Card.Img src={props.item.photograph1} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>Cuisine: {props.item.cuisine_type}</Card.Text>
          <Card.Text>Location: {props.item.neighborhood}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Restcard;
