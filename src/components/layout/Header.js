import React from "react";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/">Home</Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
