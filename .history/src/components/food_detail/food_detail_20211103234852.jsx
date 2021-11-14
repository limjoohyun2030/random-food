import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.section}>
    <img src={food.image} alt="" />
    <div className={styles.title}>Name : {food.title}</div>
    <div className={styles.dishTypes}>DishTypes : {food.dishTypes}</div>
    <div className={styles.title}>Instructions : {food.instructions}</div>
  </section>
);

export default FoodDetail;
