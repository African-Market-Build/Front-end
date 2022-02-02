import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import AxiosWithAuth from "./../utils/AxiosWithAuth";
import { useNavigate } from "react-router-dom";

const AddItem = (props) => {
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState({
    item_name: "",
    item_location: "",
    item_description: "",
    item_price: "",
    available: true,
    owner_id: Number,
  });

  const handleChange = (e) => {
    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    AxiosWithAuth()
      .post(`/items`)
      .then((resp) => {
        console.log(resp);
        setItemDetails(resp.data);
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
          <label htmlFor="item-name">Name of Item:</label>
          <input
            onChange={handleChange}
            name="item-name"
            id="item-name"
            className="form-control mt-2"
          />
          <label htmlFor="item-location">Location:</label>
          <input
            onChange={handleChange}
            name="item-location"
            id="item-location"
            className="form-control mt-2"
          />
          <label htmlFor="item-description">Description:</label>
          <input
            onChange={handleChange}
            name="item-description"
            id="item-description"
            className="form-control mt-2"
          />
          <label htmlFor="item-price">Price:</label>
          <input
            onChange={handleChange}
            name="item-price"
            id="item-price"
            className="form-control mt-2"
          />

          <div>
            <button
              className="AddItemFormBtn"
              onClick={() => {
                handleChange(itemDetails);
              }}
            >
              Add Item
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddItem;
