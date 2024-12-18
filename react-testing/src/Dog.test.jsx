import React from "react";
import {render} from "@testing-library/react";
import Dog from "./Dog";
import { expect, it } from "vitest";

it('should render', () => {
  render(<Dog name="Rusty" isAdopted={true} />);
});

it('should match snapshot', () => {
  const {asFragment} = render(<Dog name="Rusty" isAdopted={true} />);
  expect(asFragment()).toMatchSnapshot();
});

it('should match snapshot', () => {
  const {asFragment} = render(<Dog name="Rusty" isAdopted={false} />);
  expect(asFragment()).toMatchSnapshot();
});