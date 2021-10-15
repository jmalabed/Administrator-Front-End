import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

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
      <form onSubmit={handleSubmit}>
        <h2> Edit hotdesk name here:</h2>
        <input type="text" name="name" onChange={handleChange}></input>
        <input type="submit" value="Edit" />
        <button onClick={onClose} className="close">
          Close
        </button>
      </form>
    </div>,
    document.getElementById("jm-portal")
  );
};

export default EditPortal;
