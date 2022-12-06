import React, { useState } from "react";
import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>MealsApp</h1>
        <HeaderButton onClick={props.onClickCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="Food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
