import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";

const FoodDetail = ({ food }) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      <div>
        
      </div>

    }}
  >
    <section className={styles.section}>
      <div>{food.title}</div>
      <img src={food.image} alt="" />
    </section>
  </OutsideClickHandler>
);

export default FoodDetail;
