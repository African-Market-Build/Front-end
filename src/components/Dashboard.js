import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        console.log(resp);
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

  const handleEdit = (items) => {
    AxiosWithAuth()
      .put(`/items/${items.id}`, items)
      .then((res) => {
        setItems(res.data);
        navigate(`/dashboard`);
      })
      .catch((err) => console.log({ err }));
    setEditing(false);
  };

  const handleEditSelect = (id) => {
    setEditing(true);
    setEditId(id);
  };

  //   const handleEditCancel = () => {
  //     setEditing(false);
  //   };

  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEditSelect={handleEditSelect}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
