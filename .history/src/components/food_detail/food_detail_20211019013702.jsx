import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section>
    <div>{food.title}</div>
    <div>{food.image}</div>
  </section>
);

export default FoodDetail;
