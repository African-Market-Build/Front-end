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
      <div>
        <h1>Items</h1>
        {items.map((item) => {
          return (
            <Item key={item.item_id} item={item} handleDelete={handleDelete} />
          );
        })}
      </div>
      <button onClick={() => navigate("/addItem")} className="addItemBtn">
        Click Here to Add Item
      </button>
    </Container>
  );
};

export default Dashboard;
