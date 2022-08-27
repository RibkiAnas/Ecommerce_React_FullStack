import React from "react";
import Products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {Products.map((singleProduct) => {
          return (
            <Col key={singleProduct._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={singleProduct} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
