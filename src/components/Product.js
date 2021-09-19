import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Product(props) {
  const { product, onAdd } = props;
  const [value, setValue] = useState(product.rating);
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div className="pricemargin">₹{product.price}</div>
      <div>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      <div className="btncenter">
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
