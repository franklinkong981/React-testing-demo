//notice we don't need to import anything from vitest anymore
import React from "react";
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component without crashing', () => {
    render(<App />);

    screen.debug(); //prints out the jsx in the App component onto the command line.
  });
});

