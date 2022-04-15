import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="intro"
      className="shadow-2-strong d-flex align-items-center justify-content-center"
    >
      <div className="w-50 mx-auto ">
        <h2 className="mb-3 text-center">Best Food Waiting For Your Belly</h2>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          {" "}
          <Form.Control type="email" placeholder="Enter email" />
          <Button variant="danger" type="submit">
            Search
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default Banner;
