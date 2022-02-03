import React from "react";
import styled from "styled-components";

const Item = (props) => {
  const { item, handleDelete, handleEditSelect } = props;

  return (
    <>
      <div>
        <h2>{item.item_name}</h2>
        <p>Location: {item.item_location}</p>
        <h4>{item.item_description}</h4>
        <p>Price: ${item.item_price}</p>
      </div>

      <div>
        <button
          onClick={() => {
            handleDelete(item.item_id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Item;
