import React from "react";
import s from "./Post.module.css";
import image from "../../../../data/img1.webp";
import like from "../../../../data/like.png";
import like_active from "../../../../data/like_active.png";
import comment from "../../../../data/message.png";

const Post = (props) => {
  let toggleLikes = () =>
    props.toggleLikes(props.id);
  
  return (
    <div className={s.item}>
      <div className={s.info}>
        <img src={image} className={s.profile} alt="profile image"/>
        <div className={s.container}>
          <button onClick={toggleLikes} className={s.icon}>
            <img src={props.like ? like_active : like} className={s.like} alt="like" />
          </button>
          <div className={s.icon}>
            <img src={comment} className={s.comment} alt="comment"/>
          </div>
          <div className={s.icon}>{props.likesCount}</div>
          <div className={s.icon}>{props.commentsCount}</div>
        </div>
      </div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Post;
