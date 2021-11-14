import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";

function MyComponent() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        cons
      }}
    >
      Hello World
    </OutsideClickHandler>
  );
}

const FoodDetail = ({ food }) => (

  <section>
    <div>{food.title}</div>
    <img src={food.image} alt="" />
  </section>
);

export default FoodDetail;
