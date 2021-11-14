import React from "react";
import FoodItem from "../food_item/food_item";
import styles from "./food_list.module.css";

// const FoodList = ({ foods, onFoodClick }) => (
const FoodList = ({ foods}) => (
  <ul className={styles.foods}>
    {foods &&
      foods.map((food) => (
        <FoodItem key={food.id} food={food} onFoodClick={onFoodClick} />
      ))}
  </ul>
);

export default FoodList;
