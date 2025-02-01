import React from "react";
import s from "../News.module.css";
import image from "../../../data/news.png"

const NewsElement = (props) => {
    return (
        <div className={s.container}>
            <img className={s.image} src={image} alt="" />
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
            <p className={s.date}>{props.date}</p>
        </div>
    )
}
export default NewsElement;