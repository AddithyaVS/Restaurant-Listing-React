import React, { useState, useEffect } from "react";
import Restcard from "./Restcard";
import { Row, Col, Container } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { listRestaurants } from "../Actions/restaurantAction";


function Home() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.restaurantList)
  const{restaurant} = data

  // const [restaurants, setRestaurants] = useState([]);
  // async function fetchData() {
  //   await fetch("/res.json")
  //     .then((res) => res.json())
  //     .then((data) => setRestaurants(data.restaurants));
  // }


  useEffect(() => {
   dispatch(listRestaurants())
  }, []);

  console.log(restaurant);

  return (
    <Container>
    <Row>
      {restaurant ?
         restaurant.map((restaurant) => (
            <Col sm={12} md={8} lg={6} xl={3}>
              <Restcard item={restaurant} />
            </Col>
          ))
        : null}
    </Row>
    </Container>
  );
}

export default Home;
