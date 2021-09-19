import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <aside className="block col-1">
      <h2>Cart List</h2>
      <div>
        {cartItems.length === 0 && (
          <div style={{ marginLeft: "20px" }}>Cart is Empty</div>
        )}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2" style={{ marginTop: "-10px" }}>
            <IconButton color="success" onClick={() => onAdd(item)}>
              <AddCircleIcon />
            </IconButton>
            <IconButton sx={{ color: red[500] }} onClick={() => onRemove(item)}>
              <RemoveCircleIcon />
            </IconButton>
          </div>
          <div className="col-2  text-right">
            {item.qty} x ₹{item.price.toFixed(2)}
          </div>
          <div className="col-2 text-right">
            {(item.qty * item.price).toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />

          <div className="row">
            <div className="col-2">
              <strong>TotalPrice</strong>
            </div>
            <div className="col-1 text-right">
              <strong>₹{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="btncenter">
            <button>CheckOut</button>
          </div>
        </>
      )}
    </aside>
  );
}
