import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section>
    <div>{food.title}</div>
    <img>{food.image}</img>
  </section>
);

export default FoodDetail;
