import React from "react";
import s from "./User.module.css";
import image from "../../../data/user.svg";
import { NavLink } from "react-router-dom";

const User = (props) => {

  return (
    <div className={s.container}>
      <div className={s.left}>
        <NavLink to={"../profile/" + props.id}>
          <img
            className={s.profile}
            src={props.photoUrl != null ? props.photoUrl : image}
            alt="profile image"
          />
        </NavLink>
        <button
          onClick={() => {
            props.followed
              ? props.unfollowUser(props.id)
              : props.followUser(props.id);
          }}
          className={props.followed ? [s.active].join(" ") : s.follow}
          disabled={props.followingInProgress.some((id) => id === props.id)}
        >Подписаться</button>
      </div>
      <div className={s.right}>
        <div className={s.name}>{props.name}</div>
        <div className={s.status}>
          {props.status != null
            ? s.status
            : "Пользователь предпочел не ставить описание..."}
        </div>
        <div className={s.country}>{props.country},</div>
        <div className={s.city}>{props.city}</div>
      </div>
    </div>
  );
};
export default User;
