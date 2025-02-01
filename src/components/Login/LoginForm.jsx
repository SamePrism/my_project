import React from "react";
import s from "./Login.module.css";
import { Form, Field } from "react-final-form";
import { FormControls } from "../common/Forms/FormsControls";
import {
  requiredField,
  emailValidate,
  composeValidators,
} from "../../Utilities/validators";


const LoginForm = (props) => {
  return (
    <Form
      initialValues={{}}
      onSubmit={(values) => {
        props.login({
          email: values.username,
          password: values.password,
          rememberMe: values.rememberMe,
          captcha: values.captcha,
        });
      }}
    >
      {({ handleSubmit, pristine, form, submitting }) => (
        
        <form className={props.error ? s.formError : s.form} onSubmit={handleSubmit}>
          {props.error ? <span className={s.err}>{props.error}</span> : ''}
          <h2>Вход в аккаунт</h2>
          <Field
            name="username"
            component={FormControls}
            element={"input"}
            validate={composeValidators(requiredField, emailValidate)}
            type="text"
            placeholder="Адрес электронной почты"
          />
          <Field
            name="password"
            component={FormControls}
            element={"input"}
            validate={requiredField}
            type="password"
            placeholder="Введите пароль"
          />

          <div className={s.container}>
            <label htmlFor="remember-me">Запомнить меня</label>
            <Field name="rememberMe" component="input" type="checkbox" />
          </div>

          {props.captchaUrl && (
            <div className={s.captcha}>
              {<img src={props.captchaUrl} alt="captcha" />}
              <Field
                name="captcha"
                component={FormControls}
                element="input"
                placeholder="Текст с reCAPTCHA"
                validate={requiredField}
              />
            </div>
          )}
          <button className={s.submit} type="submit" disabled={submitting}>
            Вход
          </button>
          <button
            className={s.clear}
            type="button"
            disabled={pristine || submitting}
            onClick={form.reset}
          >
            Очистить всё
          </button>
        </form>
      )}
    </Form>
  );
};

export default LoginForm;
