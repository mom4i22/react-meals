import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice,
    });
  };

  const price = `$${props.mealPrice.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
