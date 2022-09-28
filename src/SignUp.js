import React, { PureComponent, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "./AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signUp } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"></h2>
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" ref={emailRef}></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" ref={passwordRef}></Form.Control>
          </Form.Group>
          <Form.Group id="passwordConf">
            <Form.Label>Password confirmation:</Form.Label>
            <Form.Control type="password" ref={passwordConfRef}></Form.Control>
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  );
}
