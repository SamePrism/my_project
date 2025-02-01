import React from "react";
import NewsElement from "./NewsElement/NewsElement";
import s from "./News.module.css";

const News = (props) => {
  let newsList = props.news.map((n) => (
    <NewsElement title={n.title} description={n.description} date={n.date} />
  ));
  let nextPage = () => {
    props.nextPage();
  };
  let prevPage = () => {
    props.prevPage();
  };
  return (
    <div>
      <div className={s.news}>{newsList.slice(props.start, props.end)}</div>
      <div className={s.buttons}>
        <button className={s.btnPrev} onClick={prevPage}>
          Назад
        </button>
        <button className={s.btnNext} onClick={nextPage}>
          Вперед
        </button>
      </div>
    </div>
  );
};
export default News;
