import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.section}>
    <img src={food.image} alt="" />
    <div className>Name : {food.title}</div>
    <div className>DishTypes : {food.dishTypes}</div>
    <div className>Instructions : {food.instructions}</div>
  </section>
);

export default FoodDetail;
