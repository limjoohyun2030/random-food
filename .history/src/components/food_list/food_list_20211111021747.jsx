import React from "react";
import FoodItem from "../food_item/food_item";
import styles from "./food_list.module.css";

const FoodList = React.forwardRef(({ foods, onFoodClick }, ref) => {
  return (
    <section>
      <div className={styles.sidebarLeft}>hi</div>
      <ul className={styles.foods}>
        {foods &&
          foods.map((food) => (
            <FoodItem
              key={food.id}
              food={food}
              onFoodClick={onFoodClick}
              ref={ref}
            />
          ))}
      </ul>
      <div className={styles.sidebars}>hi</div>
    </section>
  );
});

export default FoodList;
