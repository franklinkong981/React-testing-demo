import React from 'react';
import {render} from '@testing-library/react';
import Toggler from './Toggler.jsx';

it('should start showing the h1', () => {
  const {getByText} = render(<Toggler/>);
  const heading = getByText("Hello World");
  expect(heading).toHaveClass('Toggler-text');
  expect(heading).toBeInTheDocument();
});