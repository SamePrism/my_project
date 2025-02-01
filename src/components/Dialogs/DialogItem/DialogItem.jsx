import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  let selectDialog = () =>{
    props.selectDialog(props.id);
  }
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const linkClasses = [];
        if (isActive) {
          linkClasses.push(s.activeLink);
        }
        return linkClasses.join(" ");
      }}
      onClick={selectDialog}
    >
      <div className={s.dialog}>{props.name}</div>
    </NavLink>
  );
};

export default DialogItem;
