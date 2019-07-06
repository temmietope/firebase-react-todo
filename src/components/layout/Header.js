import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link className="link" to="/">
        {" "}
        Home{" "}
      </Link>{" "}
      |{" "}
      <Link className="link" to="/about">
        {" "}
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
// const linkStyle = {
//   color: "#fff",
//   textDecoration: "none"
// };
export default Header;
