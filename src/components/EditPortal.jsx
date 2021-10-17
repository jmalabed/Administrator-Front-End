import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
const EditPortal = ({
  isOpen,
  deskId,
  onClose,
  input,
  setInput,
  setUpdate,
}) => {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const editName = async (id) => {
    try {
      const configs = {
        method: "PUT",
        body: JSON.stringify({ name: input.name }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const updatedDesk = await fetch(
        `https://office-culture.herokuapp.com/hotdesk/${id}`,
        configs
      );
      const parsedDesk = await updatedDesk.json();
      console.log(parsedDesk);
      setUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    editName(deskId);
    onClose();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div id="modal-wrap">
      <div id="jm-modal">
        <Row>
          <Col></Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 className="text-center mb-5"> Edit hotdesk name here:</h2>
            <Form onSubmit={handleSubmit} className="d-flex flex-column">
              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name:"
              ></Form.Control>
              <div className="d-flex justify-content-around">
                <Button variant="success" type="submit" value="Edit">
                  Edit
                </Button>
                <br />
                <Button variant="light" onClick={onClose}>
                  Close
                </Button>
              </div>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>,
    document.getElementById("jm-portal")
  );
};

export default EditPortal;
