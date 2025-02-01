import React from "react";
import s from "./User/User.module.css";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  

  let curP = props.currentPage;
  let curFP = curP - 4 < 0 ? 0 : curP - 4;
  let curLP = curP + 3 > pages.length ? pages.length : curP + 3;
  let slicedPages = pages.slice(curFP, curLP);
  let buttons = slicedPages.map((p) => {
    return (
      <button
        key={p}
        onClick={() => props.onPageChanged(p)}
        className={p === props.currentPage ? s.activeBtn : s.button}
      >
        {p}
      </button>
    );
  });
  return (
    <div>
      <h2 className={s.heading}>Пользователи в вашем городе</h2>
      {props.usersList}
      <div className={s.btnContainer}>
        <div className={s.buttons}>{buttons}</div>
      </div>
    </div>
  );
};
export default Users;
