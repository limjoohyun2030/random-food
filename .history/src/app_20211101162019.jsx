import { Component, useEffect, useState, useRef } from "react";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import SearchHeader from "./components/search_header/search_header";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // const ref = useRef();
  const [foods, setFoods] = useState([]);
  const [isSelectedFood, setIsSelectedFood] = useState();
  // const [isFoodOpen, setIsFoodOpen] = useState(false);

  const selectFood = (food) => {
    setIsSelectedFood(food);
  };

  // const handleOpen = (e) => {
  //   e.preventDefault();
  //   setIsFoodOpen((prevState) => !prevState);
  // };

  // const closeFood = () => {
  //   setIsFoodOpen(false);
  // };

  useEffect(() => {
    // const checkIfClickedOutside = (e) => {
    //   if (isFoodOpen && ref.current && !ref.current.contains(e.target)) {
    //     setIsFoodOpen(false);
    //   }
    // };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.spoonacular.com/recipes/random?number=4&apiKey=92cedfb0b9e844679738e6c6c90cd453",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setFoods(result.recipes))
      .catch((error) => console.log("error", error));

    // document.addEventListener("mousedown", checkIfClickedOutside);

    // return () => {
    //   document.removeEventListener("mousedown", checkIfClickedOutside);
    // };
    // }, []);
  }, []);

  return (
    // <div className={styles.app} ref={ref}>
    <div className={styles.app}>
      <SearchHeader />
      <BrowserRouter>
        <Route
        <div className={styles.detail}>
          {isSelectedFood && <FoodDetail food={isSelectedFood} />}
        </div>

        <div
          className={styles.list}
          // onClick={() => setIsFoodOpen((oldstate) => !oldstate)}
          // onClick={handleOpen}
        >
          {/* {isSelectedFood && (
            <FoodList
              foods={foods}
              onFoodClick={selectFood}
              // closeFood={closeFood}
            />
          )} */}
          <FoodList foods={foods} onFoodClick={selectFood} />
          {/* <FoodList foods={foods} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
