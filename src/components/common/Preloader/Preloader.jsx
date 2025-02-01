import React from "react";
import loading from "../../../data/loading.svg";
import s from "./Preloader.module.css"
const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={loading} alt="preloader" />
    </div>
  );
};
export default Preloader;
