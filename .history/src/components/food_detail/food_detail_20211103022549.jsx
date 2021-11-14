import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
    <img src={food.image} alt="" />
  <section className={styles.section}>
    <div>Name : {food.title}</div>
    <div>DishTypes : {food.dishTypes}</div>
    <div>Instructions : {food.instructions}</div>
  </section>
);

export default FoodDetail;
