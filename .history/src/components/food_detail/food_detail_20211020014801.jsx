import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";

function MyComponent() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        console.log("hi");
      }}
    >
      Hello World
    </OutsideClickHandler>
  );
}

const FoodDetail = ({ food }) => (
  <OutsideClickHandler
      onOutsideClick={() => {
        console.log("hi");
      }}
    >
      
    </OutsideClickHandler>
  <section>
    <div>{food.title}</div>
    <img src={food.image} alt="" />
  </section>
);

export default FoodDetail;
