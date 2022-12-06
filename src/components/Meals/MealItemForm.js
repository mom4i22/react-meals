import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const addMealRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = addMealRef.current.value;
    const enteredAmountNumber = +addMealRef.current.value;

    if (enteredAmountNumber < 1 || enteredAmount > 5) {
      setValidAmount(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={addMealRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add to cart</button>
      {!validAmount && <p>Please enter a valid amount between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
