import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Toggler from './Toggler.jsx';
import { expect } from 'vitest';

it('should toggle', () => {
  const {getByText} = render(<Toggler/>);
  const heading = getByText("Hello World");
  expect(heading).toHaveClass('Toggler-text');
  expect(heading).toBeInTheDocument();

  //click the button the first time and now we expect the heading to not be in there.
  fireEvent.click(getByText('Toggle'));
  expect(heading).not.toBeInTheDocument();
});