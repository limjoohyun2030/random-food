import React from "react";
import styles from "./food_item.module.css";

const FoodItem = ({ food }) => (
  const onClick = 

  <li className={styles.box}>
    <div className={styles.food}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </li>
);

export default FoodItem;
