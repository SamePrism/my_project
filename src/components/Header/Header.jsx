import React from "react";
import s from "./Header.module.css";
import image from "../../data/header-logo.jpg";
import login from "../../data/login.png";
import exit from "../../data/exit.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let greet = "";
  let hour = new Date().getHours();
  if (hour <= 6) {
    greet = "Доброй ночи";
  } else if (hour > 6 && hour <= 12) {
    greet = "Доброе утро";
  } else if (hour > 12 && hour <= 18) {
    greet = "Добрый день";
  } else {
    greet = "Добрый вечер";
  }
  if (props.isAuth) {
    greet = greet + ", " + props.login + "!";
  } else {
    greet = greet + "!";
  }
  let link = (
    <NavLink className={s.login} to="/login">
      <img className={s.login_img} src={login} alt="" />
    </NavLink>
  );
  if (props.isAuth) {
    link = (
      <div className={s.container}>
        {props.login}
        <NavLink className={s.login} onClick={props.logoutUser}>
          <img className={s.login_img} src={exit} alt="log out"/>
        </NavLink>
      </div>
    );
  }

  return (
    <header className={s.header}>
      <img src={image} alt="logo"/>
      <span className={s.greet}>{greet}</span>
      <div>{link}</div>
    </header>
  );
};

export default Header;
