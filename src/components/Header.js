import { IconButton } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Mobile Shopping</h1>
        </a>
      </div>
      <div>
        <IconButton
          href="#/cart"
          color="primary"
          sx={{ fontSize: 40 }}
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </IconButton>
      </div>
    </header>
  );
}
