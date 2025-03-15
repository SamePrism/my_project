import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";


describe("компонента ProfileStatus", () => {
  test("статус отображается корректно", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.getByText("Test status")).toBeInTheDocument();
  }),

  test('статус отображен в виде span при первом запуске', () => {
    render(<ProfileStatus status = "Test status"/>);
    expect(screen.getAllByTestId("span_status")).toHaveLength(1); 
  }),

  test('статус отображен в виде input при двойном клике на span', () => {
    render(<ProfileStatus status = "Test status" />)
    fireEvent.doubleClick(screen.getByTestId("span_status"))
    waitFor(() => {
      expect(screen.findByTestId("input_status").value).toEqual("Test status");
    });
  }),

  test('статус изменяется при вводе текста в input', async () => {
    render(<ProfileStatus status = "Test status" />)
    fireEvent.doubleClick(screen.getByTestId("span_status"));

    await screen.findByTestId("input_status")
    fireEvent.change(screen.getByTestId("input_status"),
     { target: { value: "New status" } });
    expect(screen.getByTestId("input_status").value).toEqual("New status");
  })
});