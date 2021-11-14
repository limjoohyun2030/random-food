import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";
function MyComponent() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        alert('You clicked outside of this component!!!');
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
