import { useEffect, useState } from "react";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const [foods, setFoods] = useState([]);
  state = { foodClicked: false };
  foodRef = React.createRef();

  component

  // const [selectedFood, setSelectedFood] = useState();

  // const selectFood = (food) => {
  //   setSelectedFood(food);
  // };

  useEffect(() => {
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
  }, []);

  // return (
  //   <div className={styles.app}>
  //     <SearchHeader />
  //     <section>
  //       <div className={styles.detail}>
  //         {selectedFood && <FoodDetail food={selectedFood} />}
  //       </div>
  //       <div className={styles.list}>
  //         <FoodList foods={foods} onFoodClick={selectFood} />
  //       </div>
  //     </section>
  //   </div>
  // );
}

export default App;
