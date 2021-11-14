import React from "react";
import FoodItem from "../food_item/food_item";
import styles from "./food_list.module.css";

const FoodList = ({food, onFood}) => (
  <ul className={styles.foods}>
    {props.foods &&
      props.foods.map((food) => <FoodItem key={food.id} food={food} />)}
  </ul>
);

export default FoodList;
