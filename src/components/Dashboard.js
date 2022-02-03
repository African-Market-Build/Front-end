import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import styled from "styled-components";

import Item from "./Item";
// import EditForm from "./EditForm";

import AxiosWithAuth from "./../utils/AxiosWithAuth";
import axios from "axios";

const Dashboard = (props) => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    AxiosWithAuth()
      .get(`/items`)
      .then((resp) => {
        setItems(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    AxiosWithAuth()
      .delete(`/items/${id}`)
      .then((resp) => {
        setItems(resp.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Button onClick={() => navigate("/addItem")} className="addItemBtn">
        Click Here to Add Item
      </Button>
      <h1>Items</h1>
      <div className="eachCard">
        {items.map((item) => {
          return (
            <Item key={item.item_id} item={item} handleDelete={handleDelete} />
          );
        })}
      </div>
    </Container>
  );
};

export default Dashboard;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0px solid;
  color: black;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  background-color: #000;
  color: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;
  height: 2em;
  padding-left: 24px;
  padding-right: 24px;

  :hover {
    background-color: rgb(13, 110, 253);
    border: 1px solid rgb(13, 110, 253);
    color: white;
  }
`;
