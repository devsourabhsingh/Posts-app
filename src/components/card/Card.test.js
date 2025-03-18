import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders card with title", () => {
  render(<Card title="Test Post" />);
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});