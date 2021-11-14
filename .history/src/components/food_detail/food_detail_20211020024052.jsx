import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";

const FoodDetail = ({ food }) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      <div>
        {<section className={styles.section}>
          <div>{food.title}</div>
          <img src={food.image} alt="" />
        </section> ? (
          "section"
        ) : undefined}
      </div>;
    }}
  ></OutsideClickHandler>
);

export default FoodDetail;
