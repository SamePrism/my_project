import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item_container}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Профиль
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Сообщения
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Новости
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Музыка
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/users"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Пользователи
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) => {
              const linkClasses = [];
              if (isActive) linkClasses.push(s.activeLink);
              return linkClasses.join(" ");
            }}
          >
            Настройки
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
