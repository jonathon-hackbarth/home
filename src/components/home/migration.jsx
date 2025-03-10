import React from 'react';
import Nav from "react-bootstrap/Nav";

export const Jumbotron = React.forwardRef((props, ref) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle} ref={ref}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
});

export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      onClick={props.onClick} // Ensure onClick is passed down
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
