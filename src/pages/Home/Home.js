import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="homepage-main-sec">
      <Header />
      <Link to="/product">
        <Button type="button" className="products-btn">
          See Products
        </Button>
      </Link>
    </div>
  );
};

export { Home };
