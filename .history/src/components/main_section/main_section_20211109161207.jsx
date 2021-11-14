import React from 'react';

const MainSection = (props) => (

    return

    <Header onRefreshClick={onRefreshClick} />
    <section>
      <div className={styles.detail}>
        {isFoodOpen && <FoodDetail food={isSelectedFood} />}
      </div>

      <div
        className={styles.list}
        onClick={() => setIsFoodOpen((oldstate) => !oldstate)}
      >
        <FoodList foods={foods} onFoodClick={selectFood} ref={ref} />
      </div>
    </section>
            
    );

export default MainSection;