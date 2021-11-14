import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section>
    <div>{food.title}</div>
    <div>
      <img>{food.image}</img>
    </div>
  </section>
);

export default FoodDetail;
