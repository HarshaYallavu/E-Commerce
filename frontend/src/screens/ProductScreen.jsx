import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const [prod, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchdata();
  }, [productId]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={prod.image} alt={prod.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{prod.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={prod.rating}
                text={`${prod.numReviews} reviews `}
              ></Rating>
            </ListGroupItem>
            {/* <ListGroupItem>
              <h3>${prod.price}</h3>
            </ListGroupItem> */}
            <ListGroupItem>
              <strong>{prod.description}</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${prod.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Stock :</Col>
                  <Col>
                    <strong>
                      {prod.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn -block"
                  type="button"
                  disabled={prod.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
