import React from "react";
import styles from "./food_item.module.css";

const onClick = () => {
  console.log("hi");
};

const FoodItem = ({ food }) => (
  <li className={styles.box}>
    <div className={styles.food} onClick={}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </li>
);

export default FoodItem;
