import React from "react";
import {render, screen} from '@testing-library/react';
import Counter from "./Counter";
import { test } from "vitest";

test("it renders without crashing", () => {
  render(<Counter />);
});