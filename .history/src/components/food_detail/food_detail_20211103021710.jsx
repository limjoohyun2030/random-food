import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.section}>
    <img src={food.image} alt="" />
    <div>{food.title}</div>
    <ul>
      
    </ul>
    <div>{food.cuisines[0]}</div>
  </section>
);

export default FoodDetail;
