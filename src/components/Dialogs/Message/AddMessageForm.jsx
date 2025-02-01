import React from "react";
import image from "../../../data/send.png";
import s from "../Dialogs.module.css";
import { Form, Field } from "react-final-form";
import { FormControls } from "../../common/Forms/FormsControls";
import { requiredField } from "../../../Utilities/validators";


const AddMessageForm = (props) => {
    return (
      <Form
      onSubmit={values => {
        props.sendMessage(values.message)
      }}>
       {({ handleSubmit, pristine, form, submitting }) => (
        <form onSubmit={handleSubmit} className={s.item}>
          <Field 
            className={s.input}
            name="message"
            placeholder="Введите сообщение..."
            component={FormControls}
            element={'textarea'}    
            type="text"
          />
          <button type="submit" className={s.sendButton}>
            <img src={image} alt="" />
          </button>
        </form>)}
      </Form>
    );
  };
export default AddMessageForm