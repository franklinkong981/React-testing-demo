import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from "./Counter";
import { expect } from "vitest";

test("it renders without crashing", () => {
  render(<Counter />);
});

test('button increments counter', () => {
  const {getByText, debug} = render(<Counter />);
  debug();
  //initial state of the counter
  const h2 = getByText('Current count: 0');

  const btn = getByText("Add");
  fireEvent.click(btn);
  debug();
  expect(h2).toHaveTextContent('1');
  expect(h2).not.toHaveTextContent('0');
});

