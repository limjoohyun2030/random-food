import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.description}>
    <div>{food.title}</div>
    <img src={food.image} alt="" />
  </section>
);

export default FoodDetail;
