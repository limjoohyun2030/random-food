import React from "react";
import styles from "./food_item.module.css";

const FoodItem = ({ food, onFoodClick }) => (
  <div className={styles.box} onClick={() => onFoodClick(food)}>
    if($(e.target).parents('.className').length < 1){ console.log('팝업 외 부분이 맞습니다'));

    <div className={styles.food}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </div>
);

export default FoodItem;
