import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const [highlightButton, setButtonHighlight] = useState(false);

  const cartContext = useContext(CartContext);

  const numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    highlightButton ? styles.bump : ""
  }`;

  const { items } = cartContext;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlight(true);
    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <AiOutlineShoppingCart />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderButton;
