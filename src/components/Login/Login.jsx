import React from "react";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { getIsAuthSelector, getCaptchaUrlSelector, getErrorSelector } from "../../redux/auth-selector";

let mapStateToProps = (state) => ({
  isAuth: getIsAuthSelector(state),
  captchaUrl: getCaptchaUrlSelector(state),
  error: getErrorSelector(state),
});

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1 className={s.header}>
        Не смогли вас найти. Попробуйте следующие методы
      </h1>
      <div className={s.formContainer}>
        <LoginForm error={props.error} captchaUrl={props.captchaUrl} login={props.loginUser} />
        <div className={s.signUp}>
          <h2>Регистрация</h2>
          <a
            target="_blank"
            noopener
            noreferrer
            href="https://social-network.samuraijs.com/signUp"
          >
            <button className={s.btnSignUp}>Присоединиться!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { loginUser })(Login);
