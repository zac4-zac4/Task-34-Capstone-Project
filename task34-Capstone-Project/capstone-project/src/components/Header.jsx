import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="container">
        <ul className="d-flex list-unstyled mb-0">
          <li className="me-3">
            <Link to="/dashboard" className="text-decoration-none">
              Dashboard
            </Link>
          </li>
          <li className="me-3">
            <Link to="/add-event" className="text-decoration-none">
              Add Event
            </Link>
          </li>
          <li className="me-3">
            <Link to="/help" className="text-decoration-none">
              Help
            </Link>
          </li>
          <li className="me-3">
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </li>
          <li className="me-3">
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
