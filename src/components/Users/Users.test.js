import React from "react";
import { waitFor, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import User from "./User/User";

describe("компонента Users", () => {
  test("корректно отображает пользователей", () => {
    const users = [
      {
        id: 1,
        name: "User1",
        followed: false,
      },
      {
        id: 2,
        name: "User2",
        followed: true,
      },
    ];
    const getUsers = jest.fn().mockResolvedValue(users);
    render(<Users getUsers={getUsers} />);
  })
});
