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
  </OutsideClickHandler>
);

export default FoodDetail;
