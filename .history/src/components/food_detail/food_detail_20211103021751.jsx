import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.section}>
    <img src={food.image} alt="" />
    <div>{food.title}</div>
    <ul>
      <div>{food.cuisines[0]}</div>
      <div>{food.cuisines[1]}</div>
      <div>{food.cuisines[2]}</div>
    </ul>
  </section>
);

export default FoodDetail;
