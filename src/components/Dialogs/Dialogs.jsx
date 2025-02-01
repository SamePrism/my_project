import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      selectDialog={props.selectDialog}
    />
  ));

  // eslint-disable-next-line
  let messagesElements = props.dialogsPage.dialogs.map((dialog) => {
    if (dialog.active === true) {
      return dialog.messages.map((message) => (
        <Message message={message.message} />
      ));
    }
  });

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.container}>
        <div className={s.messages}>{messagesElements}</div>
        <AddMessageForm sendMessage={props.sendMessage}/>
      </div>
    </div>
  );
};



export default Dialogs;
