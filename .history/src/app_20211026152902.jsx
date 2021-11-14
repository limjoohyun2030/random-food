import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const [foods, setFoods] = useState([]);
  state = { isfoodClicked: false };
  foodRef = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);   
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    console.log('event target is: ', event.target);
    if(!this.foodRef.current.contains(event.target)){
      this.setState({
        isfoodClicked: false,
      });
    }
  };

  handleClick = () => {
    this.setState({isfoodClicked: !this.state.isfoodClicked});
  };

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

  render() {
    const {isfoodClicked} = this.state;
    return (
      <div className={styles.app}>
      //     <SearchHeader />
      //     <section>
      //       <div className={styles.detail}>
      //         {isfoodClicked && <FoodDetail food={isfoodClicked} />}
      //       </div>
      //       <div className={styles.list}>
      //         <FoodList foods={foods} onFoodClick={isfoodClicked} />
      //       </div>
      //     </section>
      //   </div>
    )
  };


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
