import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import Header from "./components/header/header";
import Login from "./components/login/login";

function App({ authService }) {
  const ref = useRef();
  const [foods, setFoods] = useState([]);
  const [isSelectedFood, setIsSelectedFood] = useState();
  const [isFoodOpen, setIsFoodOpen] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const selectFood = (food) => {
    setIsSelectedFood(food);
  };

  const onRefreshClick = () => {
    setIsRefresh((oldstate) => !oldstate);
  };

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
  }, [isRefresh]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isFoodOpen && ref.current && !ref.current.contains(e.target)) {
        setIsFoodOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isFoodOpen]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/random-food/"
            render={() => <Login authService={authService} />}
          />

          <Route
            path="/random-food/home"
            render={() => (
              <div>
                <Header onRefreshClick={onRefreshClick} onLo/>
                <section>
                  <div className={styles.detail}>
                    {isFoodOpen && <FoodDetail food={isSelectedFood} />}
                  </div>

                  <div
                    className={styles.list}
                    onClick={() => setIsFoodOpen((oldstate) => !oldstate)}
                  >
                    <FoodList
                      foods={foods}
                      onFoodClick={selectFood}
                      ref={ref}
                    />
                  </div>
                </section>
              </div>
            )}
          />
          <Route path="*">
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
