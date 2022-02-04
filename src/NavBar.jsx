import React from "react";
import { ImCart } from "react-icons/im";

function NavBar() {
  return (
    <div className="navBar">
      <a>Cars</a>
      <a className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">0</div>
      </a>
    </div>
  );
}

export default NavBar;

