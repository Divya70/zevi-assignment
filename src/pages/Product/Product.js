import React from "react";
import "./product.css";
import { useCart } from "../../context/CartContext";
import { SingleProduct } from "../../components/SingleProduct";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
const Product = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = useCart();
  const transformProduct = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.name.toLowerCase().includes(searchQuery) >= byRating
      );
    }

    return sortedProducts;
  };
  return (
    <>
      <Header />
      <div className="product-sec">
        <Filter />
        <div className="product-container">
          {transformProduct().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export { Product };
