import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import AxiosWithAuth from "./../utils/AxiosWithAuth";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState({
    item_name: "",
    item_location: "",
    item_description: "",
    item_price: "",
    available: true,
    owner_id: 1,
  });

  const handleChange = (e) => {
    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AxiosWithAuth()
      .post(`/items`, itemDetails)
      .then((resp) => {
        console.log(resp);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="item-name">Owner ID: </label>
          <input
            onChange={handleChange}
            name="owner_id"
            id="owner_id"
            value={itemDetails.owner_id}
            className="form-control mt-2"
          />
          <label htmlFor="item-name">Name of Item:</label>
          <input
            onChange={handleChange}
            name="item_name"
            id="item-name"
            value={itemDetails.item_name}
            className="form-control mt-2"
          />
          <label htmlFor="item-location">Location:</label>
          <input
            onChange={handleChange}
            name="item_location"
            id="item-location"
            value={itemDetails.item_location}
            className="form-control mt-2"
          />
          <label htmlFor="item-description">Description:</label>
          <input
            onChange={handleChange}
            name="item_description"
            id="item-description"
            value={itemDetails.item_description}
            className="form-control mt-2"
          />
          <label htmlFor="item-price">Price:</label>
          <input
            onChange={handleChange}
            name="item_price"
            id="item-price"
            value={itemDetails.item_price}
            className="form-control mt-2"
          />

          <div>
            <button className="AddItemFormBtn">Add Item</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddItem;
