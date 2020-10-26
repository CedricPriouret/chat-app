import React from "react";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  return (
    <div>
      {/*render a MenuItem component to each element of the props array*/}
      {
        props.foodItems.map((singleMeal) => {
          return (
            <MenuItem
            key={singleMeal.itemName}
            itemName={singleMeal.itemName}
            description={singleMeal.description}
            foodImage={singleMeal.foodImage}
            price={singleMeal.price}
            isFavorite={singleMeal.isFavorite}
            />
          )
        })
      }
    </div>
  );
};

export default MenuList;
