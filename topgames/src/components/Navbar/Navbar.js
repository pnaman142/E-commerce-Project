import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary bg-white">
      <div className="container-xl">
        <p className="navbar-brand">
          <h1>TOP GAMES</h1>
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Shop</p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </p>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item">Most Popular</p>
                </li>
                <li>
                  <p className="dropdown-item">Trending</p>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p className="dropdown-item">Something else here</p>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accessories
              </p>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item">PC</p>
                </li>
                <li>
                  <p className="dropdown-item">Console</p>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p className="dropdown-item">Something else here</p>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p className="nav-link">PC Digital</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">PSN Digital</p>
            </li>
          </ul>
          <div className="search-and-icons">
            <form className="d-flex mb-2 me-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                aria-label="Search"
              />
            </form>
            <div className="user-icons d-flex mb-2">
              <div className="profile">
                <i className="bi bi-person"></i>
              </div>
              <div className="wishlist">
                <i className="bi bi-heart"></i>
              </div>
              <div
                className="cart"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="bi bi-cart3"></i>
              </div>
            </div>
          </div>
          <div className="contact-info d-md-flex">
            <p>+0987654321 | +1234567890 </p>
            <p>contact@topgames.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
