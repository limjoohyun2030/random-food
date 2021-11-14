import React from "react";
import FoodItem from "../food_item/food_item";
import styles from "./food_list.module.css";

const FoodList = React.forwardRef({ foods, onFoodClick }) => (
  <ul className={styles.foods}>
    {foods &&
      foods.map((food) => (
        <FoodItem key={food.id} food={food} onFoodClick={onFoodClick} />
      ))}
  </ul>
);

export default FoodList;
