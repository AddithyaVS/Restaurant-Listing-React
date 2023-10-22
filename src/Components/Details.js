import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Container, Card } from "react-bootstrap";
import Review from "./Review";
import { useSelector } from "react-redux";

function Details() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/res.json")
        .then((res) => res.json())
        .then((data) => setData(data.restaurants));
    };
    fetchData();
  }, []);
  // const data = useSelector(state => state.restaurantList) 
  // const{restaurant} = data
  const details = data.find((i) => i.id == params.id);
  console.log(details);
  return (
    <div> 

      {details ? (
          <Row className="my-3">
            <Col md={4}>
              <Image className="img" src={details.photograph1} alt={details.name} fluid />
              </Col>
              <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{details.name}</h2>
                  <p>{details.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p> Cuisine:{details.cuisine_type} </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Address:{details.address}</p>
                </ListGroup.Item>
              </ListGroup>
              </Col>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>
                  <h4>Operating Hours:</h4>
                  <p>Monday: {details.operating_hours.Monday}</p>
                  <p>Tueday: {details.operating_hours.Tueday}</p>
                  <p>Wednesday: {details.operating_hours.Wednesday}</p>
                  <p>Thursday: {details.operating_hours.Thursday}</p>
                  <p>Friday: {details.operating_hours.Friday}</p>
                  <p>Saturday: {details.operating_hours.Saturday}</p>
                  <p>Sunday: {details.operating_hours.Sunday}</p>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Row>
                  <Card className="my-3 mx-3 p-3 rounded">
                   <Review data={details.reviews}/>
                  </Card>
                </Row>
          </Row>
      ) : null}
    <Link className="btn btn-outline-dark rounded my-3 btn-sm " to={"/"}> Back </Link>

    </div>
  );
}

export default Details;
