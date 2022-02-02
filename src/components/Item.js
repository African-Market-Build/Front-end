import React from "react";
import styled from "styled-components";

const Item = (props) => {
  const { items, handleDelete, handleEditSelect } = props;

  return (
    <div>
      <button
        onClick={() => {
          handleDelete(items.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleEditSelect(items.id);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default Item;
