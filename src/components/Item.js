import React from "react";
import styled from "styled-components";

const Item = (props) => {
  const { item, handleDelete } = props;

  return (
    <>
      <div className="card">
        <div className="deleteBtn">
          <Button
            onClick={() => {
              handleDelete(item.item_id);
            }}
          >
            X
          </Button>
        </div>
        <h2>{item.item_name}</h2>
        <p>Location: {item.item_location}</p>
        <h6>{item.item_description}</h6>
        <p>Price: ${item.item_price}</p>
      </div>
    </>
  );
};

export default Item;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid;
  color: black;
  display: flex;
  justify-content: right;
  color: white;
  text-shadow: 1px 1px 5px black, 0 0 2px grey, 0 0 1px grey;
`;
