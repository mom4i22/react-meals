import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFiveChars = (value) => value.trim().length === 4;

const Checkout = (props) => {
  //   const [name, setName] = useState(true);
  //   const [street, setStreet] = useState(true);
  //   const [postCode, setPostCode] = useState(true);
  //   const [city, setCity] = useState(true);

  const [formInputsValid, setFormInputsValid] = useState({
    name: true,
    street: true,
    postCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostCodeIsValid =
      isFiveChars(enteredPostCode) && !isEmpty(enteredPostCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postCode: enteredPostCodeIsValid,
      city: enteredCityIsValid,
    });

    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostCodeIsValid &&
      enteredCityIsValid;

    if (!isFormValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      postCode: enteredPostCode,
      city: enteredCity,
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          formInputsValid.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputsValid.street ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputsValid.postCode ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postCodeInputRef} />
        {!formInputsValid.postCode && (
          <p>Please enter a valid 4-digit post code!</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          formInputsValid.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
