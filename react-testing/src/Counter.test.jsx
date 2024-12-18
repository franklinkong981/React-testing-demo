import React from "react";
import {render, screen} from '@testing-library/react';
import Counter from "./Counter";

test("it renders without crashing", () => {
  render(<Counter />);
});

test("playing with queries", () => {
  const {getAllByText, getByText, queryByText, getByPlaceholderText} = render(<Counter/>);
  console.log(getByPlaceholderText('username'));
});