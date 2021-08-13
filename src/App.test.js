/* eslint-disable no-undef */
import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("render input query", () => {
  render(<App />);
  const input = screen.getByTestId("input");
  screen.debug();
  expect(input).toBeInTheDocument();
});
test("render search button", () => {
  render(<App />);
  const searchButton = screen.getByTestId("buttonSearch");
  expect(searchButton).toBeInTheDocument();
});
