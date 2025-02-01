import React from "react";
import { render, screen } from "@testing-library/react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("отображение компоненты ProfileStatus", () => {
  test("status from props should be displayed", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.getByText("Test status")).toBeInTheDocument();
  }),
  test('статус отображен в виде span при первом запуске', () => {
    const component = create(<ProfileStatus status="Test status" />);
    const testRenderer = component.root;
    const spanElements = testRenderer.findAllByType("span");
    expect(spanElements.length).toBe(1); 
  })
});